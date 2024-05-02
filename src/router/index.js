
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import CadColaboradorView from '@/pages/CadColaboradorView.vue'
import HomeView from '@/pages/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TimesView from '@/pages/TimesView.vue'
import CadTimeView from '@/pages/CadTimeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/cadColaborador', component: CadColaboradorView },
  { path: '/cadTimes', component: CadTimeView },
  { path: '/times', component: TimesView },
]

const router = createRouter({
  history: createWebHistory("/organograma_vuejs/"),
  routes,
})

export default router
