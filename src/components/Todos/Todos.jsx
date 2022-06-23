import React from 'react';
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_TODO, CHANGE_FAVORITE_TODO, CHANGE_COMPLETED_TODO } from '../types'

const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispath = useDispatch();

    const deleteTodo = (index) => {
        dispath({
            type: DELETE_TODO,
            payload: index
        })
    }

    const makeFavorite = (index) => {
        dispath({
            type: CHANGE_FAVORITE_TODO,
            payload: index
        })
    }

    const isCompleted = (index) => {
        dispath({
            type: CHANGE_COMPLETED_TODO,
            payload: index
        })
    }

    return (
        <div className="todos">
                {todos.map((todo, index) => {
                    return (
                        <Todo
                            key={index}
                            todo={todo}
                            index={index}
                            makeFavorite={() => makeFavorite(index)}
                            deleteTodo={() => deleteTodo(index)}
                            isCompleted={() => isCompleted(index)}
                            />
                    );
                })
                }
            </div>
    );
};

export default Todos;