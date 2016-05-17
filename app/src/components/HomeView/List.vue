<style scoped>
  div {
    margin: 16px auto;
    width: calc(100% - 16px);
  }
</style>

<template>
  <div>
    <item></item>
    <item></item>
    <item></item>
    <item></item>
    <item></item>
    <item></item>
  </div>
</template>

<script>
  import Item from './List/Item'

  export default {
    components: { Item }
  }
</script>
