import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'
import HomeView from '@/views/HomeView.vue'
import SchoolView from '@/views/SchoolView.vue'
import ActivtyView from '@/views/ActivtyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: LogInView,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/school',
      name: 'School',
      component: SchoolView,
    },
    {
      path: '/activity',
      name: 'Activity',
      component: ActivtyView,
    },
  ],
})

export default router
