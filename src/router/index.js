import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/login', name: 'loginPage', component: () => import('../views/LoginView.vue') },
  { path: '/', name: 'floorPage', component: () => import('../views/MainView.vue') },
  { path: '/search', name: 'searchPage', component: () => import('../views/MainView.vue') },
  { path: '/status', name: 'statusPage', component: () => import('../views/MainView.vue') },
  { path: '/save', name: 'savePage', component: () => import('../views/MainView.vue') },
  { path: '/:pathMatch(.*)', name: 'notFound', redirect: '/login', hidden: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
