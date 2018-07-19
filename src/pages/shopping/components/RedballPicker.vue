<template>
  <div>
    <div class="col-xs-ball  ball-div" v-for="ball in balls" @click="handleRedClick(ball)">
      <div class="ball-item ball-red" :class="{'ball-red-selected':ball.selected}">{{ball.number}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "redball-picker",
    props: ['randomRedBalls'],
    data() {
      return {
        balls: [],
        selectedRedBalls: []
      }
    },
    watch: {
      randomRedBalls(newVal, oldVal) {
        //先清空被选择的球
        this.selectedRedBalls = [];
        //将所有随机产生的球保存起来
        this.selectedRedBalls = newVal;
        this.balls.forEach(item => {
          //查找当前球是否为已经被选中的球
          let index = this.selectedRedBalls.indexOf(item.number);
          //修改当前球的状态
          item.selected = index != -1;
        });

        //因为子组件中已经修改了数据，所以需要告诉父组件数据产生了变化
        this.$emit('on-redballs-change', this.selectedRedBalls);
      }
    },
    methods: {
      handleRedClick(ball) {
        //判断当前球是否被选中
        if (ball.selected) {
          //取消选中
          ball.selected = false;
          //删除元素
          let index = this.selectedRedBalls.indexOf(ball.number);
          this.selectedRedBalls.slice(index, 1);
        } else {
          //若未被选中
          if (this.selectedRedBalls.length < 6) {
            ball.selected = true;
            //保存当前选中球的号码
            this.selectedRedBalls.push(ball.number);
          } else {
            alert("最多只能选择6个红球");
          }
        }

        //通知父组件选中的红球发生了变化
        this.$emit('on-redballs-change', this.selectedRedBalls);
      }
    },
    mounted() {
      for (let i = 1; i <= 33; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        this.balls.push({
          number: i.toString(),
          selected: false
        })
      }
    }
  }
</script>

<style scoped>
  .ball-div {
    float: left;
  }
</style>
