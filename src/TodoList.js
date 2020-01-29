import React, { useState, useReducer } from "react";
import RootReducer, { initialState }from "./reducers";
import Button from "./Button";
import Input from "./Input";
import { addTodo, changeTodoStatus, removeTodo, resetTodos } from "./actions/todoActions";

const TodoList = () => {
    const [todo, setTodo] = useState( "" );
    const [state, dispatch] = useReducer( RootReducer, initialState );

    const handleRemoveTodo = id => {
        dispatch( removeTodo( id ) );
    };

    const handleTodoStatusChange = id => {
        dispatch( changeTodoStatus( id ) );
    };

    const handleOnClick = () => {
        dispatch( addTodo( todo ), setTodo( "" ) )   
    };

    const handleResetTodos = () => {
        dispatch( resetTodos() )
    };

    console.log( state.todos );

    const todoList = state.todos.map( todo => {
        return (
            <li key={ todo.id }>
                <p>{ todo.value }</p>
                <Button onClick={ () => handleTodoStatusChange( todo.id ) }>
                    { todo.done ? "Done" : "Mark Done" }
                </Button>
                { todo.done ? <Button onClick={ () => handleRemoveTodo( todo.id ) }>Remove Todo</Button> : "" }
            </li>
        );
    } );

    const allTodoDone = state.todos.filter( todo => todo.done === false ).length;

    return (
        <div className="todo-list">
            <Input onChange={ ( value => setTodo( value ) ) } value={ todo }/>
            <Button onClick={ handleOnClick }>Add Todo</Button>
            <ul>{ todoList }</ul>
            { allTodoDone <= 0 && state.todos.length > 0 ? <Button onClick={ handleResetTodos }>Reset Todos</Button> : ""}
        </div>
    );
};

export default TodoList;