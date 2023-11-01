import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/", component: () => import("../views/LoginView.vue"),
    children: [
      { path: "", redirect: "/login" },
      { path: "login", name: "loginPage", component: () => import("../components/login/LoginBox.vue") },
      { path: "register", name: "registerPage", component: () => import("../components/login/RegisterBox.vue") }
    ]
  },
  {
    path: "/", component: () => import("../views/MainView.vue"),
    children: [
      { path: "floor", name: "floorPage" },
      { path: "search", name: "searchPage" },
      { path: "status", name: "statusPage" },
      { path: "save", name: "savePage" },
    ]
  },
  { path: "/:pathMatch(.*)", name: "notFound", redirect: "/login", hidden: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
