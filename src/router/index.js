import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Shop = () => import('@/views/Shop')
const Product = () => import('@/views/Product')
const ShoppingCart = () => import('@/views/ShoppingCart')

const Page404 = () => import('@/views/Page404')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'link active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/shop',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'shop',
          name: 'Shop',
          component: Shop
        },
        {
          path: 'product/:id',
          name: 'Product',
          component: Product
        },
        {
          path: 'cart',
          name: 'Cart',
          component: ShoppingCart
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        }
      ]
    },
    {
      path: '*',
      redirect: '/pages/404'
    }
  ]
})

export default router
