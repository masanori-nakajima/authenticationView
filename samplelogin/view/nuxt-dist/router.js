import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _358295e1 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _3687c2b0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4acb7728 = () => interopDefault(import('../pages/personal-information.vue' /* webpackChunkName: "pages/personal-information" */))
const _326aff3e = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _6ce01f99 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _358295e1,
    name: "inspire"
  }, {
    path: "/login",
    component: _3687c2b0,
    name: "login"
  }, {
    path: "/personal-information",
    component: _4acb7728,
    name: "personal-information"
  }, {
    path: "/signup",
    component: _326aff3e,
    name: "signup"
  }, {
    path: "/",
    component: _6ce01f99,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
