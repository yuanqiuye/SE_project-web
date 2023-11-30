import { createRouter, createWebHistory } from "vue-router"

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
    children: [
      { path: "floor", name: "floorPage", component: () => import("@/components/main/FloorPage.vue") },
      { path: "search", name: "searchPage", component: () => import("@/components/main/SearchPage.vue") },
      { path: "status", name: "statusPage", component: () => import("@/components/main/StatusPage.vue") },
      { path: "save", name: "savePage", component: () => import("@/components/main/SavePage.vue") }
    ]
  },
  { path: "/:pathMatch(.*)", name: "notFound", redirect: "/login", hidden: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
