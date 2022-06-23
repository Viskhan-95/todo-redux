import { createStore } from "redux";
import todosDB from '../todos';
import { ADD_TODO, DELETE_TODO, CHANGE_FAVORITE_TODO, CHANGE_COMPLETED_TODO } from '../components/types';

const initialState = {
    todos: [...todosDB]
}
console.log(initialState);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            if (action.payload.text !== '') {
                return {
                    ...state,
                    todos: [{
                        text: action.payload.text,
                        favorite: false,
                        completed: false
                    },
                    ...state.todos,]
                }
            }
            break;
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item, index) => index === action.payload ? false : true)
            }
        case CHANGE_FAVORITE_TODO:
            return {
                ...state,
                todos: state.todos.map((item, index) => {
                    if (index === action.payload) {
                        return {
                            ...item,
                            favorite: !item.favorite
                        }
                    }
                    return item;
                })
            }
        case CHANGE_COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.map((item, index) => {
                    if (index === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return item;
                })
            }
        default:
            return state
    }
};

const store = createStore(reducer);

export default store;