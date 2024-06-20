import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import RuAdd from '@/components/user/ru-add.vue'
import RuUpdate from '@/components/user/ru-update.vue'
import RuSelect from '../components/user/ru-select.vue'
import RuLogs from '@/components/user/ru-logs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/about',
          component: AboutView
        },
        {
          path: '/add',
          component: RuAdd
        },
        {
          path: '/select',
          component: RuSelect
        },
        {
          path: '/update',
          component: RuUpdate
        },
        {
          path: '/logs',
          component: RuLogs
        }
      ]
    }
  ]
})

export default router
