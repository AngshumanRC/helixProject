import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Product from '../views/Product.vue'
import About from '../views/About.vue'
import Add from '../views/Add.vue'
import Update from '../views/Update.vue'
import Permission from '../views/Permission.vue'
import Pos from '../views/Pos.vue'
import ReportTool from '../views/ReportTool.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/permission',
    name: 'Permission',
    component: Permission
  },
  {
    path: '/pos',
    name: 'Pos',
    component: Pos
  },
  {
    path: '/report_tool',
    name: 'ReportTool',
    component: ReportTool
  },
]

const router = new VueRouter({
  routes
})

export default router
