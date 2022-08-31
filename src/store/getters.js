export default {
  doneTodos(state) {
    return state.todos.filter((todo) => todo.done);
  },
  doneTodosLength(state, getters) {
    return getters.doneTodos.length;
  },
  getTodoById: (state) => (id) => {
    return state.todos.find((todo) => todo.id === id);
  }
};
