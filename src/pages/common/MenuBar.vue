<template>
  <div style="height: 50px">
    <div class="row menu">
      <div class="text-center menu-item" :class="{'menu-item-activied':currentIndex===1}"
           @click="handleClick(1)">
        <span class="glyphicon glyphicon-home"></span>
        <p>首页</p>
      </div>
      <div class="text-center menu-item" :class="{'menu-item-activied':currentIndex===2}"
           @click="handleClick(2)">
        <span class="glyphicon glyphicon-shopping-cart"></span>
        <p>选号</p>
      </div>
      <div class="text-center menu-item" :class="{'menu-item-activied':currentIndex===3}"
           @click="handleClick(3)">
        <span class="glyphicon glyphicon-user"></span>
        <p>我的</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "menu-bar",
    props: {
      index: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        currentIndex: this.index
      }
    },
    computed: {
      //获取登录信息
      ...mapGetters({
        isLogin: 'isLogin'
      })
    },
    methods: {
      handleClick(index) {
        this.currentIndex = index;
        switch (index) {
          case 1:
            this.$router.push('/');
            break;
          case 2:
            this.$router.push('/select');
            break;
          case 3 :
            if (this.isLogin) {
              this.$router.push('/my');
            } else {
              this.$router.push('/login')
            }
        }
      }
    }
  }
</script>

<style scoped>

</style>
