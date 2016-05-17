<style>
  @font-face {
    font-family: 'Roboto';
    src: url(../components/HomeView/assets/roboto.ttf);
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  input {
    background-color: #1abc9c;
    border: 0;
    color: #fff;
    font-size: 20px;
    height: 51px;
    outline: 0;
    padding: 15px;
    width: 100%;
  }

  ::-webkit-input-placeholder { color: #16a085; }
</style>

<template>
  <input type="text" @keyup.enter="submit" v-model="todo" placeholder="new todo...">
</template>

<script>
  import { ipcRenderer } from 'electron'

  export default {
    data () {
      return { todo: '' }
    },
    methods: {
      submit () {
        ipcRenderer.send('new-todo', this.todo)
      }
    }
  }
</script>
