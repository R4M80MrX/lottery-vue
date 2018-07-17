<!--标题栏，可能有返回按钮-->
<template>
  <div class="row title">
    <div class="col-xs-12">
      <!--返回链接-->
      <router-link
        tag="div"
        v-if="isBack"
        class="div_back"
        to="/"
      >&lt;返回
      </router-link>
      <!--标题-->
      {{title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "title-bar",
    props: {
      title: String,
      isBack: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .div_class{
    position: absolute;
    left: 15px;
  }
</style>
