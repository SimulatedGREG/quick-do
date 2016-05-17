<style>
  @font-face {
    font-family: 'Roboto';
    src: url(./HomeView/assets/Roboto.ttf);
  }

  * { box-sizing: border-box; }

  body {
    background-color: #ecf0f1;
    font-family: 'Roboto', sans-serif;
  }
</style>

<template>
  <top></top>
  <controls :selected="selected"></controls>
  <list :selected="selected"></list>
</template>

<script>
  import Controls from './HomeView/Controls'
  import List from './HomeView/List'
  import Top from './HomeView/Top'

  export default {
    data () {
      return { selected: 'ALL' }
    },
    components: {
      Controls,
      List,
      Top
    }
  }
</script>
