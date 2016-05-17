<style lang="scss">
  @font-face {
    font-family: 'Roboto';
    src: url(./HomeView/assets/roboto.ttf);
  }

  * { box-sizing: border-box; }

  body {
    background-color: #ecf0f1;
    font-family: 'Roboto', sans-serif;
  }

  header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  main {
    position: absolute;
    top: 86px;
    width: 100%;
  }

  ::-webkit-scrollbar-track {
  	background-color: rgba(#1abc9c, .1);
    display: none;
  }

  ::-webkit-scrollbar {
  	width: 6px;
  	background-color: rgba(#1abc9c, .1);
    display: none;
  }

  ::-webkit-scrollbar-thumb {
  	background-color: rgba(#16a085, .5);
    display: none;
  }
</style>

<template>
  <header>
    <top></top>
    <controls :selected="selected"></controls>
  </header>
  <main>
    <list :selected="selected"></list>
  </main>
</template>

<script>
  import Controls from './HomeView/Controls'
  import List from './HomeView/List'
  import Top from './HomeView/Top'

  export default {
    data () {
      return { selected: 'TODO' }
    },
    components: {
      Controls,
      List,
      Top
    }
  }
</script>
