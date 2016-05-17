const localStorageMiddleware = {
  onMutation (mutation, state, store) {
    localStorage.setItem('todos', JSON.stringify(state.todos.all))
  }
}

export default [localStorageMiddleware]
