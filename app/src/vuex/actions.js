import * as types from './mutation-types'

export function addTodo ({ dispatch }, todo) {
  console.log(todo)
  todo.id = Math.floor(Math.random() * 65535).toString(16)
  todo.isDone = false
  // dispatch(types.ADD_TODO, todo)
}

export function updateTodo ({ dispatch }, id) {
  dispatch(types.UPDATE_TODO, id)
}

export function removeTodo ({ dispatch }, todo) {
  dispatch(types.REMOVE_TODO, todo)
}
