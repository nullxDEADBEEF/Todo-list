import { todoTypes } from "../reducers";

export const addTodo = value => ( {
    type: todoTypes.ADD_TODO,
    payload: value
} );

export const changeTodoStatus = id => ( {
    type: todoTypes.CHANGE_STATUS,
    payload: id
} );

export const removeTodo = id => ( {
    type: todoTypes.REMOVE_TODO,
    payload: id
} );

export const resetTodos = () => ( {
    type: todoTypes.RESET_TODOS,
} );