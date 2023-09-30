import React from 'react';
import './Todo.css';

const TodoList = (props) => {



    return (
        <div className='todo-style' >
            <li>{props.text}</li>
            <button className="fa fa-trash-o d-btn" onClick={() => {
                props.onSelect(props.id);
            }}

            >X</button>

        </div>
    )
}

export default TodoList