import { ipcRenderer } from 'electron'
import store from './vuex/store'

ipcRenderer.on('add-todo', (e, todo) => {
  store.dispatch('ADD_TODO', {
    id: Math.floor(Math.random() * 65535).toString(16),
    isDone: false,
    todo
  })
})
