<style scoped>
  div {
    margin: 16px auto;
    width: calc(100% - 16px);
  }
</style>

<template>
  <div>
    <item v-for="todo in todos | cats" track-by="$index" :data="todo"></item>
  </div>
</template>

<script>
  import Item from './List/Item'
  import { todos } from '../../vuex/getters'

  export default {
    components: { Item },
    filters: {
      cats (todos) {
        return todos.filter(t => {
          if (this.selected === 'WAITING') return t.isDone === false
          else if (this.selected === 'DONE') return t.isDone === true
          else return true
        })
      }
    },
    props: ['selected'],
    vuex: {
      getters: { todos }
    }
  }
</script>
