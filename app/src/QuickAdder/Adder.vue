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
  <input v-el:input type="text" @keyup.enter="submit" @keyup.esc="close" v-model="todo" placeholder="new todo...">
</template>

<script>
  import { ipcRenderer } from 'electron'
  const { BrowserWindow } = require('electron').remote

  export default {
    data () {
      return { todo: '' }
    },
    methods: {
      submit () {
        ipcRenderer.send('new-todo', this.todo)
        this.close()
      },
      close () {
        this.todo = ''
        BrowserWindow.getAllWindows().forEach(win => {
          if (win.getTitle() === '') win.hide()
        })
      }
    },
    ready () {
      this.$els.input.focus()
    }
  }
</script>
