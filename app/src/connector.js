import { ipcRenderer } from 'electron'
import store from './vuex/store'

ipcRenderer.on('add-todo', (e, todo) => {
  store.dispatch('ADD_TODO', { todo })
})
