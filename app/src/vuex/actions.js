import * as types from './mutation-types'

export function addTodo ({ dispatch }, todo) {
  dispatch(types.ADD_TODO, todo)
}

export function updateTodo ({ dispatch }, todo) {
  dispatch(types.UPDATE_TODO, todo)
}

export function removeTodo ({ dispatch }, todo) {
  dispatch(types.REMOVE_TODO, todo)
}
