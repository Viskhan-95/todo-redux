import React from 'react';

const Todo = (props) => {
    let stylesTodo = 'todo';

    if (props.todo.favorite && props.todo.completed) {
        stylesTodo += " selected completed_by";
    }
    else if (props.todo.favorite) {
        stylesTodo += " selected"
    }
    else if (props.todo.completed) {
        stylesTodo += " completed_by"
    }

    return (
        <div className={stylesTodo}>
            <div className="favorite">
                <button onClick={() => props.makeFavorite(props.indexTodo)}>&#9733;</button>
            </div>
            <div className="todo-text">
                {props.todo.text}
            </div>
            <div className="completed">
                <input type={'checkbox'}
                    checked={props.todo.completed}
                    onClick={() => props.isCompleted(props.indexTodo)}
                />
            </div>
            <div className="actions">
                <button onClick={() => props.deleteTodo(props.indexTodo)}>X</button>
            </div>
        </div>
    );
};

export default Todo;