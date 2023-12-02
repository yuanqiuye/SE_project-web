import { createRouter, createWebHistory } from "vue-router";
import { getRole } from "@/api/auth";

const routes = [
  {
    path: "/", component: () => import("@/views/LoginView.vue"),
    children: [
      { path: "", redirect: "/login" },
      { path: "login", name: "loginPage", component: () => import("@/components/login/LoginBox.vue") },
      {
        path: "register", component: () => import("@/components/login/RegisterBox.vue"),
        children: [
          { path: "", name: "registerPage", component: () => import("@/components/login/register/Register.vue") },
          { path: "", name: "registerPage_verify", component: () => import("@/components/login/register/Verify.vue") },
          { path: "", name: "registerPage_result", component: () => import("@/components/login/register/Result.vue") },
        ]
      }
    ]
  },
  {
    path: "/", component: () => import("@/views/MainView.vue"),
    beforeEnter: (to, from, next) => {
      const role = getRole();
      if (role == "user") next();
      else if (role == "admin") next({ name: "floorPage_admin" });
      else next({ name: "loginPage" });
    },
    children: [
      { path: "floor", name: "floorPage", component: () => import("@/components/user/FloorPage.vue") },
      { path: "search", name: "searchPage", component: () => import("@/components/user/SearchPage.vue") },
      { path: "status", name: "statusPage", component: () => import("@/components/user/StatusPage.vue") },
      { path: "save", name: "savePage", component: () => import("@/components/user/SavePage.vue") },
    ]
  },
  {
    path: "/admin", component: () => import("@/views/MainView.vue"),
    beforeEnter: (to, from, next) => {
      const role = getRole();
      if (role == "user") next({ name: "floorPage" });
      else if (role == "admin") next();
      else next({ name: "loginPage" });
    },
    children: [
      { path: "floor", name: "floorPage_admin", component: () => import("@/components/admin/AdminFloorPage.vue") },
      { path: "request", name: "requestPage_admin", component: () => import("@/components/admin/AdminRequestPage.vue") },
      { path: "save", name: "savePage_admin", component: () => import("@/components/user/SavePage.vue") },
    ]
  },
  { path: "/:pathMatch(.*)", name: "notFound", redirect: "/login", hidden: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
