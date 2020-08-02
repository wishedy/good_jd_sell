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
//订单
const Agency = (resolve) => {
  import(/* webpackChunkName: 'Agency' */'@/views/agency/index').then((module) => {
    resolve(module)
  })
}
//号码查询
const Search = (resolve) => {
  import(/* webpackChunkName: 'Search' */'@/views/search/index').then((module) => {
    resolve(module)
  })
}
//设置个人信息
const EditUserInfo = (resolve) => {
  import(/* webpackChunkName: 'EditUserInfo' */'@/views/personal/editUserInfo').then((module) => {
    resolve(module)
  })
}
//登录注册页
const Login = (resolve) => {
  import(/* webpackChunkName: 'Login' */'@/views/login/index').then((module) => {
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
    //设置个人信息
    {
      path: '/editUserInfo',
      name: 'EditUserInfo',
      component: EditUserInfo,
      meta: {
        title: '设置个人信息'
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
    //号码查询
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        title: '号码查询'
      }
    },
    //代理业绩
    {
      path: '/agency',
      name: 'Agency',
      component: Agency,
      meta: {
        title: '代理业绩'
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
    //登录或注册页
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录注册页'
      }
    },
  ]
})

export default router
