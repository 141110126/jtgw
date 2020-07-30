import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f4655f6 = () => interopDefault(import('..\\pages\\aboutus.vue' /* webpackChunkName: "pages_aboutus" */))
const _68fbd19a = () => interopDefault(import('..\\pages\\aboutus\\contact.vue' /* webpackChunkName: "pages_aboutus_contact" */))
const _32a75e66 = () => interopDefault(import('..\\pages\\aboutus\\intro.vue' /* webpackChunkName: "pages_aboutus_intro" */))
const _d5eb1490 = () => interopDefault(import('..\\pages\\aboutus\\recruit.vue' /* webpackChunkName: "pages_aboutus_recruit" */))
const _f8aba25a = () => interopDefault(import('..\\pages\\aboutus\\team.vue' /* webpackChunkName: "pages_aboutus_team" */))
const _72636ae4 = () => interopDefault(import('..\\pages\\consultation.vue' /* webpackChunkName: "pages_consultation" */))
const _3858184a = () => interopDefault(import('..\\pages\\consultation\\Conference.vue' /* webpackChunkName: "pages_consultation_Conference" */))
const _98f4cab8 = () => interopDefault(import('..\\pages\\consultation\\Consulting.vue' /* webpackChunkName: "pages_consultation_Consulting" */))
const _e4939b4a = () => interopDefault(import('..\\pages\\consultation\\Project.vue' /* webpackChunkName: "pages_consultation_Project" */))
const _34a37a88 = () => interopDefault(import('..\\pages\\consultation\\Training.vue' /* webpackChunkName: "pages_consultation_Training" */))
const _4daccf33 = () => interopDefault(import('..\\pages\\Error.vue' /* webpackChunkName: "pages_Error" */))
const _53f82133 = () => interopDefault(import('..\\pages\\Partner.vue' /* webpackChunkName: "pages_Partner" */))
const _8dbdc9b0 = () => interopDefault(import('..\\pages\\Zhenhua.vue' /* webpackChunkName: "pages_Zhenhua" */))
const _db16ddc6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'hash',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _2f4655f6,
    name: "aboutus",
    children: [{
      path: "contact",
      component: _68fbd19a,
      name: "aboutus-contact"
    }, {
      path: "intro",
      component: _32a75e66,
      name: "aboutus-intro"
    }, {
      path: "recruit",
      component: _d5eb1490,
      name: "aboutus-recruit"
    }, {
      path: "team",
      component: _f8aba25a,
      name: "aboutus-team"
    }]
  }, {
    path: "/consultation",
    component: _72636ae4,
    name: "consultation",
    children: [{
      path: "Conference",
      component: _3858184a,
      name: "consultation-Conference"
    }, {
      path: "Consulting",
      component: _98f4cab8,
      name: "consultation-Consulting"
    }, {
      path: "Project",
      component: _e4939b4a,
      name: "consultation-Project"
    }, {
      path: "Training",
      component: _34a37a88,
      name: "consultation-Training"
    }]
  }, {
    path: "/Error",
    component: _4daccf33,
    name: "Error"
  }, {
    path: "/Partner",
    component: _53f82133,
    name: "Partner"
  }, {
    path: "/Zhenhua",
    component: _8dbdc9b0,
    name: "Zhenhua"
  }, {
    path: "/",
    component: _db16ddc6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
