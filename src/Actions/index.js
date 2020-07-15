let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  text
})

export const deleteTodo = deleteId => ({
  type: 'DELETE_TODO',
  id: deleteId,
})



