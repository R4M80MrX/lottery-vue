<!--
  主组件，所有页面都是在App.vue下进行切换的，
  即所有的路由也是App.vue的子组件，
  所以将router标示为App.vue的子组件
-->
<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      console.log("文档加载完成....")
    }
  }

</script>
<style>
</style>
