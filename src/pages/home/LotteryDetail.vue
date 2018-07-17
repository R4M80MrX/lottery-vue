<template>
  <div v-if="history !== null">
    <!--标题栏-->
    <title-bar :title="title" :isBack="isBack"></title-bar>
    <!--轮播图-->
    <carousel></carousel>
    <!--彩票条目-->
    <div class="clearfix">
      <div class="pull-left">第{{code}}期</div>
      <div class="pull-right">{{history.date}}</div>
    </div>
    <!--显示本期中奖的球-->
    <div class="row text-center" style="margin-top: 10px;margin-bottom: 10px
">
      <div class="ball-item ball-red" v-for="redBall in history.red.split(',')">{{redBall}}</div>
      <div class="ball-item ball-blue">{{history.blue}}</div>
    </div>
    <!--显示中奖的信息-->
    <div>
      <table class="table table-bordered">
        <thead>
        <tr style="background-color: gainsboro">
          <td class="text-center">本期销量</td>
          <td class="text-center">奖池奖金</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="text-center">{{history.sales}}</td>
          <td class="text-center">{{history.poolmoney}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--显示中奖的结果数据-->
    <div>
      <table class="table table-bordered">
        <thead>
        <tr style="background-color: gainsboro">
          <td class="text-center">奖项</td>
          <td class="text-center">中奖注数</td>
          <td class="text-center">奖金</td>
        </tr>
        </thead>
        <tbody>
        <!--中奖结果数据循环生成-->
        <tr v-for="prizegrade in history.prizegrades" :key="prizegrade.type">
          <td class="text-center">{{prizegrade.type}}</td>
          <td class="text-center">{{prizegrade.typenum}}</td>
          <td class="text-center">{{prizegrade.typemoney}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--菜单栏-->
    <menu-bar :index="1"></menu-bar>
  </div>
</template>

<script>
  import TitleBar from '@/pages/common/TitleBar'
  import Carousel from '@/pages/common/Carousel'
  import MenuBar from '@/pages/common/MenuBar'
  import axios from 'axios'

  export default {
    name: "lottery-detail",
    props: ['code'],
    components: {
      TitleBar,
      Carousel,
      MenuBar
    },
    data() {
      return {
        isBack: true,
        title: '博彩详情',
        history: null
      }
    },
    mounted() {
      axios.get('/api/detail?code=' + this.code).then(res => {
        this.history = res.data.data
      })
    }
  }
</script>

<style scoped>

</style>
