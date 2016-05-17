<style lang="scss" scoped>
  div {
    background-color: rgba(#16a085, .1);
    border: solid 1px rgba(#16a085, .15);
    border-radius: 3px;
    max-height: 49px;
    padding: 14px 10px;
    transition: background 70ms ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: rgba(#16a085, .2);
    }

    input {
      display: inline-block;
      margin: 0 8px 0 6px;
    }
  }
</style>

<template>
  <div @click="toggleTodo">
    <input type="checkbox" v-model="data.isDone">
    <span>{{ data.todo }}</span>
  </div>
</template>

<script>
  import { updateTodo } from '../../../vuex/actions'

  export default {
    methods: {
      toggleTodo () {
        this.updateTodo(this.data.id)
      }
    },
    props: ['data'],
    vuex: {
      actions: { updateTodo }
    }
  }
</script>
