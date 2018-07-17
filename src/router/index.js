import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import LotteryDetail from '@/pages/home/LotteryDetail'
import LoginPage from '@/pages/user/LoginPage'
import MyPage from '@/pages/user/MyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/detail/:code',
      name: 'LotteryDetail',
      component: LotteryDetail,
      props: true
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      props: true
    },
    {
      path: '/my',
      name: 'MyPage',
      component: MyPage,
      props: true
    }
  ]
})
