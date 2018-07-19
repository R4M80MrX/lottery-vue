<template>
  <div>
    <div class="col-xs-ball" v-for="ball in balls" @click="handleBlueClick(ball)">
      <div class="ball-item ball-blue" :class="{'ball-blue-selected':ball.selected}">
        {{ball.number}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blueball-picker",
    props: ['randomBlue'],
    data() {
      return {
        balls: [],
        selectedBlueBall: null
      }
    },
    mounted() {
      for (let i = 0; i <= 16; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        this.balls.push({
          number: i.toString(),
          selected: false
        })
      }
    },
    methods: {
      handleBlueClick(ball) {
        ball.selected = !ball.selected;

        //将上一次选中的球的状态取消
        if (this.selectedBlueBall) {
          this.selectedBlueBall.selected = false;
        }

        if (ball.selected) {
          //保存选中球的状态
          this.selectedBlueBall = ball;
          //告诉父组件蓝球选中发生了变化
          this.$emit('on-blueball-change',ball.number)
        } else {
          this.selectedBlueBall = null;
          //告诉父组件蓝球选中发生了变化
          this.$emit('on-blueball-change',null)
        }
      }
    },
    watch: {
      randomBlue(newVal, oldVal) {
        this.balls.forEach(item => {
          if (item.number === newVal) {
            item.selected = true;
            this.selectedBlueBall = item;
          } else {
            item.selected = false;
          }
        });

        this.$emit('on-blueball-change', this.selectedBlueBall.number);
      }
    }
  }
</script>

<style scoped>

</style>
