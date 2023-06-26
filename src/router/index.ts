import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import(`@/views/LoginView.vue`)
    },
    {
      path: '/home',
      component: () => import(`@/views/TestView1.vue`)
    }
  ]
})

export default router
