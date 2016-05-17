import * as types from './mutation-types'

export function updateTodo ({ dispatch }, id) {
  dispatch(types.UPDATE_TODO, id)
}

export function removeTodo ({ dispatch }, todo) {
  dispatch(types.REMOVE_TODO, todo)
}
