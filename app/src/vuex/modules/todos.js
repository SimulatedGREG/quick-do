import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from '../mutation-types'

const state = {
  all: JSON.parse(localStorage.getItem('todos')) || []
}

const mutations = {
  [ADD_TODO] (state, todo) {
    state.all.push(todo)
  },
  [UPDATE_TODO] (state, id) {
    state.all.find((t, i) => {
      if (t.id === id) {
        state.all[i].isDone = !t.isDone
        return true
      }

      return false
    })
  },
  [REMOVE_TODO] (state, todo) {
    state.all.$remove(todo)
  }
}

export default {
  state,
  mutations
}
