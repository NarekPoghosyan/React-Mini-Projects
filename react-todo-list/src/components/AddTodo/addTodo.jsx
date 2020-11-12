import React, { useState } from 'react'
import './addTodoStyle.scss'

function AddTodo({ addTodo }) {
    const [todoName, setTodoName] = useState("")

    return (
        <div className="add_todo">
            <input type="text" placeholder="Enter todo name" onChange={(event) => setTodoName(event.target.value)} />
            <button onClick={() => addTodo(todoName)}>Add</button>
        </div>
    )
}

export default AddTodo;