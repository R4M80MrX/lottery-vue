<template>
  <div>
    <!--title bar-->
    <title-bar :title="title" :isBack="isBack"></title-bar>
    <!--本期的奖池信息-->
    <lottery-info></lottery-info>

    <div style="color:darkgray">请选择6个红球,1个蓝球</div>

    <!--拆出红球组件-->
    <redball-picker :randomRedBalls="randomRedBalls"
                    @on-redballs-change="handleRedballsChange"></redball-picker>

    <!--清除浮动-->
    <div class="clearfix"></div>

    <!--蓝球组件-->
    <blueball-picker :randomBlue="randomBlue"
                     @on-blueball-change="handleBlueballChange"></blueball-picker>

    <!--按钮-->
    <!--清除浮动-->
    <div class="clearfix"></div>

    <!--添加的按钮-->
    <div style="margin-top: 10px;">
      <input type="button" @click="handleAdd" value="添加" class="btn btn-default pull-right"/>
    </div>

    <!--清除浮动-->
    <div class="clearfix"></div>

    <!--机选幸运号的按钮-->
    <div style="margin-top: 10px;">
      <input type="button" @click="handleRandom" value="机选幸运号" id="btn_random"
             class="btn btn-default pull-right"/>
      <select v-model="num" class="form-control pull-right"
              style="width: 60px;display: inline-block;">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>

    <!--主要是解决页面显示不完整-->
    <div style="margin-bottom: 58px;height: 58px;"></div>

    <!--5.底部菜单栏-->
    <cart-menu-bar :cartSize="cartSize"></cart-menu-bar>
  </div>
</template>

<script>
  import TitleBar from '@/pages/common/TitleBar'
  import RedballPicker from './components/RedballPicker'
  import BlueballPicker from './components/BlueballPicker'
  import LotteryInfo from './components/LotteryInfo'
  import CartMenuBar from './components/CartMenuBar'
  //导入vuex提供的辅助函数
  import {mapActions, mapGetters} from 'vuex'
  import BallUtils from '@/utils/BallUtils'

  export default {
    name: "select-page",
    components: {
      TitleBar,
      RedballPicker,
      BlueballPicker,
      LotteryInfo,
      CartMenuBar
    },
    data() {
      return {
        title: '选号',
        isBack: true,
        redBalls: null,
        blueBall: null,
        randomRedBalls: null,
        randomBlue: null,
        num: 1 ,// 机选几注,默认1注
        cartSize: 0
      }

    },
    methods: {

      handleRedballsChange() {

      },
      handleBlueballChange() {

      },
      handleAdd() {

      },
      goToCart() {

      },
      handleRandom() {

      }
    }
    // ,
    // computed: {
    //   ...mapGetters(['cartSize'])
    // }
  }
</script>

<style scoped>
  /*组件的样式*/
  .badge {
    background-color: red;
    position: absolute;
    top: -10px;
  }
</style>
