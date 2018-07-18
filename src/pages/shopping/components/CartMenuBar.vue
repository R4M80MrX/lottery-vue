<template>
  <div class="row menu">
    <div class="col-xs-6 menu-item pull-left" @click="goToCart()">
      <span class="glyphicon glyphicon-shopping-cart"></span>
      <span class="badge">{{cartSize}}</span>
      <p>购物车</p>
    </div>
    <div class="col-xs-6 menu-item pull-right">
      <span class="glyphicon glyphicon-save"></span>
      <p>立即投注</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cart-menu-bar",
    props: ['cartSize'],
    methods: {
      goToCart() {
        this.$router.push('/cart');
      }
    }
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
