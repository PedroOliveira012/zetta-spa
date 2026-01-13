import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Panels from '@/views/Panels.vue'
import Projects from '@/views/Projects.vue'
import Robots from '@/views/Robots.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/panels', component: Panels },
  { path: '/projects', component: Projects },
  { path: '/robots', component: Robots },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || {top:0, behavior:'smooth'}
  }
})

export default router