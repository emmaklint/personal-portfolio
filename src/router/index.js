import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Blog from '@/components/blog/Blog'
import Portfolio from '@/components/portfolio/Portfolio'
import Case from '@/components/portfolio/Case'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:id',
      component: Case
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
