import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Crew from '../views/Crew.vue'
import Destination from '../views/Destination.vue'
import Technology from '../views/Technology.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/crew',
    name: 'Crew',
    component: Crew,
    props: true
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination,
    props: true
  },
  {
    path: '/Technology',
    name: 'Technology',
    component: Technology,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
