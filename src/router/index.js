import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CatFacts from '../components/CatFacts.vue'
import DogFacts from '../components/DogFacts.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cats',
      name: 'cats',
      component: CatFacts
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: DogFacts
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }

  ]
})

export default router
