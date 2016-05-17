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
  <controls></controls>
  <list></list>
</template>

<script>
  import Controls from './HomeView/Controls'
  import List from './HomeView/List'
  import Top from './HomeView/Top'

  export default {
    components: {
      Controls,
      List,
      Top
    }
  }
</script>
