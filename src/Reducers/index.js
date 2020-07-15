const initialState ={
    todoList:[]
}

const todos = (state = initialState,action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action]
            }
        case 'DELETE_TODO':
            return{
                ...state,
                todoList: state.todoList.filter((item, index) => index !== action.id)
            }
            default:
                return state
    }
}

export default todos