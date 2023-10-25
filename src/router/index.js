import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/login', name: 'loginPage', component: () => import('../views/LoginView.vue') },
  { path: '/', name: 'floorPage', component: () => import('../views/FloorView.vue') },
  
  { path: '/search', name: 'searchPage', redirect: '/login' },
  { path: '/status', name: 'statusPage', redirect: '/login' },
  { path: '/save', name: 'savePage', redirect: '/login' },
  { path: '/:pathMatch(.*)', name: 'notFound', redirect: '/login', hidden: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
