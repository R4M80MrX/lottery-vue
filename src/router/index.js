import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import LotteryDetail from '@/pages/home/LotteryDetail'


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
    }
  ]
})
