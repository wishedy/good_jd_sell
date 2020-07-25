import Vue from 'vue'
import Router from 'vue-router'

// 首页相关
const Home = (resolve) => {
  import(/* webpackChunkName: 'Home' */'@/views/home/Home').then((module) => {
    resolve(module)
  })
}
//推荐页
const Recommend = (resolve) => {
  import(/* webpackChunkName: 'Recommend' */'@/views/recommend/index').then((module) => {
    resolve(module)
  })
}
//个人中心
const Personal = (resolve) => {
  import(/* webpackChunkName: 'Personal' */'@/views/personal/index').then((module) => {
    resolve(module)
  })
}
//设置
const SetIndex = (resolve) => {
  import(/* webpackChunkName: 'SetIndex' */'@/views/personal/setIndex').then((module) => {
    resolve(module)
  })
}
//订单
const Order = (resolve) => {
  import(/* webpackChunkName: 'Order' */'@/views/order/index').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/home'
    },
    // 首页 相关
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    //个人中心
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        title: '个人中心'
      }
    },
    //我的订单
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        title: '我的订单'
      }
    },
    //设置
    {
      path: '/setIndex',
      name: 'SetIndex',
      component: SetIndex,
      meta: {
        title: '设置'
      }
    },
    //推荐内容
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      meta: {
        title: '素材推荐'
      }
    },
  ]
})

export default router