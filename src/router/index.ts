import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ContactsView from '@/views/ContactsView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/works',
    name: 'works',
    component: PortfolioView,
    props: true
  },{
    path: '/project/:id',
    name: 'project',
    component: ProjectView,
    props: true
  },{
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: function(to) {
    if (to.hash) {
      return {selector: to.hash, offset: {x: 0, y: 50}}
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes,
})

export default router
