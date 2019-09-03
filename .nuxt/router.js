import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _074e0184 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _153934a8 = () => interopDefault(import('../pages/impressum/index.vue' /* webpackChunkName: "pages/impressum/index" */))
const _27b33428 = () => interopDefault(import('../pages/about/karriere/index.vue' /* webpackChunkName: "pages/about/karriere/index" */))
const _2ce270aa = () => interopDefault(import('../pages/projekte/gewerblich/index.vue' /* webpackChunkName: "pages/projekte/gewerblich/index" */))
const _13d20cbe = () => interopDefault(import('../pages/projekte/oeffentlich/index.vue' /* webpackChunkName: "pages/projekte/oeffentlich/index" */))
const _3702134e = () => interopDefault(import('../pages/projekte/privat/index.vue' /* webpackChunkName: "pages/projekte/privat/index" */))
const _3b0b251d = () => interopDefault(import('../pages/projekte/wohnen-im-alter/index.vue' /* webpackChunkName: "pages/projekte/wohnen-im-alter/index" */))
const _28a6d17c = () => interopDefault(import('../pages/projekte/privat/arkadenhaus/index.vue' /* webpackChunkName: "pages/projekte/privat/arkadenhaus/index" */))
const _26503bc0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _074e0184,
      name: "about"
    }, {
      path: "/impressum",
      component: _153934a8,
      name: "impressum"
    }, {
      path: "/about/karriere",
      component: _27b33428,
      name: "about-karriere"
    }, {
      path: "/projekte/gewerblich",
      component: _2ce270aa,
      name: "projekte-gewerblich"
    }, {
      path: "/projekte/oeffentlich",
      component: _13d20cbe,
      name: "projekte-oeffentlich"
    }, {
      path: "/projekte/privat",
      component: _3702134e,
      name: "projekte-privat"
    }, {
      path: "/projekte/wohnen-im-alter",
      component: _3b0b251d,
      name: "projekte-wohnen-im-alter"
    }, {
      path: "/projekte/privat/arkadenhaus",
      component: _28a6d17c,
      name: "projekte-privat-arkadenhaus"
    }, {
      path: "/",
      component: _26503bc0,
      name: "index"
    }],

    fallback: false
  })
}
