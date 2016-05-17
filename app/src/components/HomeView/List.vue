<style scoped>
  div {
    margin: 16px auto;
    width: calc(100% - 16px);
  }
</style>

<template>
  <div>
    <item v-for="todo in todos" :data="todo"></item>
  </div>
</template>

<script>
  import Item from './List/Item'
  import { todos } from '../../vuex/getters'

  export default {
    components: { Item },
    vuex: {
      getters: { todos }
    }
  }
</script>
