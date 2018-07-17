<template>
  <div>
    <!--标题栏-->
    <title-bar :title="title"></title-bar>
    <!--轮播图-->
    <carousel></carousel>
    <!--历史中奖信息-->
    <history-list :list="historyList"></history-list>
  </div>
</template>

<script>
  import TitleBar from '../common/TitleBar'
  import Carousel from '../common/Carousel'
  import HistoryList from './components/HistoryList'
  import axios from 'axios'

  export default {
    name: "home-page",
    components: {
      TitleBar,
      Carousel,
      HistoryList
    },
    data() {
      return {
        title: '黑马区块链',
        isBack: false,
        historyList: null
      }
    },
    methods: {},
    mounted() {
      // 发送异步请求获取彩票历史记录数据
      axios.get('/api/index').then(res => {
        this.historyList = res.data.data

      })
    }
  }
</script>

<style scoped>
  .wrapper {
    /*position: absolute;
    left: 0;
    right: 0;
    top: 55px;
    bottom: 0;
    overflow: hidden;
    padding-left: 15px;
    padding-right: 15px;*/
  }
</style>
