import store from '@/store'
import router from './router.js'
const setTitle = (obj) => {
  document.title = obj.meta.title+'关东臻品'
}
// 针对活动页添加的神策公共属性
let info
router.beforeEach((to, from, next) => {
  if (store.state.user&&store.state.user.token ) {
    next()
  } else {
    if (to.matched.some(record => record.meta.auth)) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }else {
      next()
    }
  }
})
// 添加谷歌统计
router.afterEach(route => {
  setTitle(route)
})
export default router
