export const addTodo = ( state, payload ) => {
    if ( payload === "" ) return state;

    const newTodo = {
        id: Date.now(),
        done: false,
        value: payload
    };

    return [...state, newTodo];
};

export const changeTodoStatus = ( state, payload ) => {
    let currentTodos = [...state];
    currentTodos.forEach( todo => {
        if ( payload === todo.id ) {
            todo.done = !todo.done;
        }
    } );

    return [...currentTodos];
};

export const removeTodo = ( state, payload ) => {
    return state.filter( index => index.id !== payload );
};

export const resetTodos = () => {
    return []
};