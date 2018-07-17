<template>
  <div class="wrapper">
    <div v-for="history in list" :key="history.code" @click="handleItemClick(history.code)">
      <history-item :history="history"></history-item>
    </div>
  </div>
</template>

<script>
  import HistoryItem from "./HistoryItem"

  export default {
    name: "history-list",
    props: ['list'],
    components: {
      HistoryItem
    },
    methods: {
      handleItemClick(historycode) {

        this.$router.push({
          name: 'LotteryDetail',
          params: {
            code: historycode
          }

        })
      }
    }
  }
</script>

<style scoped>

</style>
