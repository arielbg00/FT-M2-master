const redux = require("redux");

const initialState = {
    owner: "Martina",
    todo: [],
    completed: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD":
            return ({
                ...state,
                todo: [...state.todo, action.text]
            });
        case "REMOVE":
            return {
                ...state,
                todo: state.todo.filter((text, i) => i !== action.index),
                // completed: state.todo.filter((text, i) => i === action.index)
                completed: [...state.completed, state.todo[action.index]]
            };
        default:
            return {...state};
    }
};

const store = redux.createStore(reducer);

function addTodo(text) {
    return ({type: "ADD", text});
}

function removeTodo(index) {
    return {type: "REMOVE", index}
}

store.subscribe(() => {
    console.log(store.getState());
})

// console.log(store.getState());
store.dispatch(addTodo("comprar pan"));
// console.log(store.getState());
store.dispatch(addTodo("comprar tomate"));
// console.log(store.getState());
store.dispatch(addTodo("comprar lechuga"));
// console.log(store.getState());
store.dispatch(removeTodo(1));
// console.log(store.getState());