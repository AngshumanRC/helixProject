import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Product from '../views/Product/Product.vue'
import Add from '../views/Add/Add.vue'
import Update from '../views/Update/Update.vue'
import Permission from '../views/Permission/Permission.vue'
import Pos from '../views/Pos/Pos.vue'
import ReportTool from '../views/ReportTool/ReportTool.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
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
