<template>
  <div class="row item">
    <!--左边11个格子-->
    <div class="col-xs-11">
      <!--开奖日期-->
      <div class="row">
        <span style="font-size: 18px;">第{{history.code}}期</span>
        <span style="margin-left: 10px;">{{history.date}}</span>
      </div>
      <!--开奖号码-->
      <div class="row" style="margin-top: 10px;">
        <div class="ball-item ball-red" v-for="redBall in history.red.split(',')">{{redBall}}</div>
        <div class="ball-item ball-blue">{{history.blue}}</div>
      </div>
    </div>
    <!--右边1个格子-->
    <div class="col-xs-1 item-arrow">
      <span class="glyphicon glyphicon-chevron-right"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "history-item",
    props: ['history']
  }
</script>

<style scoped>
  .item {
    border: 1px solid gainsboro;
    height: 80px;
    padding-top: 5px;
    padding-left: 15px;
  }

  .item-arrow {
    padding-left: 0px;
    padding-top: 30px;
  }
</style>
