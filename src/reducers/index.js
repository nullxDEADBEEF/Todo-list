import { addTodo, changeTodoStatus, removeTodo, resetTodos } from "./todoReducers";

export const todoTypes = {
    ADD_TODO: "addTodo",
    CHANGE_STATUS: "changeStatus",
    REMOVE_TODO: "removeTodo",
    RESET_TODOS: "resetTodos"
};

export const initialState = {
    todos: []
};

const todoReducer = ( state = initialState.todos, action ) => {
    switch( action.type ) {
        case todoTypes.ADD_TODO:
            return addTodo( state, action.payload );

        case todoTypes.CHANGE_STATUS:
            return changeTodoStatus( state, action.payload );

        case todoTypes.REMOVE_TODO:
            return removeTodo( state, action.payload );

        case todoTypes.RESET_TODOS:
            return resetTodos();
            
        default:
            return state;
    }
};

const RootReducer = ( state, action ) => ( {
    todos: todoReducer( state.todos, action )
} );

export default RootReducer;