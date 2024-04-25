
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import CadColaboradorView from '@/pages/CadColaboradorView.vue'
import HomeView from '@/pages/HomeView.vue'
import Index from '@/pages/HomeView.vue'
import TimesView from '@/pages/TimesView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/cadColaborador', component: CadColaboradorView },
  { path: '/times', component: TimesView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
