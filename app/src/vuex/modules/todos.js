import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from '../mutation-types'

const state = {
  all: []
}

const mutations = {
  [ADD_TODO] (state, todo) {
    state.all.push(todo)
  },
  [UPDATE_TODO] (state, todo) {
    state.all.find((t, i) => {
      if (t.id === todo.id) {
        state.all.$set(i, t)
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
