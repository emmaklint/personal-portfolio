import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Portfolio from '@/components/portfolio/Portfolio'
import Case from '@/components/portfolio/Case'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:id',
      name: 'Case',
      component: Case
    }
  ]
})
