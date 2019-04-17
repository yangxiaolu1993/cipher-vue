import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import _store from '../config/vuex'
import _global from '../config/global'

Vue.use(Router)
Vue.use(ElementUI)

var router = new Router({
  mode: 'history',
  routes: [{
      path: '/HW',
      name: 'HelloWorld',
      component: resolve => require(['@/pages/HelloWorld'], resolve)
    },
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/home/home'], resolve)
    },
    {
      path: '/fortune',
      name: 'fortune',
      component: resolve => require(['@/pages/fortune/fortune'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: resolve => require(['@/pages/coupons/coupons'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/identity',
      name: 'identity',
      component: resolve => require(['@/pages/identity/identity'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/friendInfo',
      name: 'friendInfo',
      component: resolve => require(['@/pages/friend_info/friend_info'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/crop',
      name: 'crop',
      component: resolve => require(['@/pages/crop/crop'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/match',
      name: 'match',
      component: resolve => require(['@/pages/match/index/index'], resolve),
      meta: {
        auth: true
      },
      children:[{
        path: 'add',
        name: 'match_add',
        component: resolve => require(['@/pages/match/add/add'], resolve),
        meta: {
          auth: true
        }
      },{
        path: 'pi',
        name: 'match_pi',
        component: resolve => require(['@/pages/pi_friends/pi_friends'], resolve),
        meta: {
          auth: true
        }
      },{
        path: 'report',
        name: 'match_report',
        component: resolve => require(['@/pages/match/report/report'], resolve),
        meta: {
          auth: true
        }
      }]
    },
    
    {
      path: '/piFriends',
      name: 'piFriends',
      component: resolve => require(['@/pages/pi_friends/pi_friends'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/lover',
      name: 'lover',
      component: resolve => require(['@/pages/deep_lover/index/index'], resolve),
      meta: {
        auth: true
      },
      children: [{
        path: 'add',
        name: 'lover_add',
        component: resolve => require(['@/pages/deep_lover/lover/lover'], resolve),
        meta: {
          auth: true
        }
      },{
        path: 'pi',
        name: 'pi',
        component: resolve => require(['@/pages/pi_friends/pi_friends'], resolve),
        meta: {
          auth: true
        }
      }]
      
    },
    {
      path: '/codeReading',
      name: 'codeReading',
      component: resolve => require(['@/pages/code_reading/code_reading'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/deepReport',
      name: 'deep_report',
      component: resolve => require(['@/pages/deep_report/deep_report'], resolve),
      meta: {
        auth: true
      }
    },
    {
      path: '/exam',
      name: 'exam',
      component: resolve => require(['@/pages/exam/exam'], resolve)
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
/**
 * vue-router提供导航守卫主要是通过跳转或取消的方式守卫导航的
 * 包括全局导航守卫、路由导航守卫、组件导航守卫
 * to 即将进入的路由对象
 * from 正要离开的路由对象
 * next 处理路由的跳转，主要用在前置守卫（beforeEach）
 */

/**
 * 全局前置守卫  
 * next() 进入管道的下一个钩子
 * next(false) 中断当前导航，浏览器URL会重置到from对应的路由
 * next('/')或next({path:'/'})  跳转到另一个路由地址，当前导航被中断
 */
router.beforeEach((to, from, next) => {
  // 当进入每一个路由之前判断是否授权,授权页在home，只有从home进入才正确，不能直接在浏览器中输入路由
  if (to.matched.some(item => item.meta.auth)) {
    if (_store.state.login) {
      next()
    } else {
      if (to.path == '/') {
        next()
      } else {
        next({
          path: '/'
        })
      }
    }
  } else {
    next()
  }
})
/**
 * 全局后置钩子
 * 不接受next函数，也不会改变导航
 */
router.afterEach((to, from, next) => {
  //设置浏览器标题
  window.document.title = _global.caption[to.name]
})

export default router
