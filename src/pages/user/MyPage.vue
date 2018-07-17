<template>
  <div>
    <title-bar title="个人主页"></title-bar>
  </div>
</template>

<script>
  import TitleBar from '@/pages/common/TitleBar'
  import MenuBar from '@/pages/common/MenuBar'
  import {mapGetters} from 'vuex'

  import BallUtils from '@/utils/BallUtils'

  export default {
    name: "my-page",
    props: {
      user: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    components: {
      TitleBar,
      MenuBar
    },
    data() {
      return {
        name: this.$store.state.username
      }
    },
    computed: {
      ...mapGetters(['user'])
    }
  }
</script>

<style scoped>

</style>
