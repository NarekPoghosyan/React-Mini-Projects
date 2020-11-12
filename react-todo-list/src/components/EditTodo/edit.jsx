import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './editStyle.scss'

function Edit({ editTodo }) {
    const [editTodoName, setEditTodoName] = useState('')
    const history = useHistory()

    return (
        <div className="edit_todo">
            <input type="text" placeholder="Edit todo name" onChange={(event) => setEditTodoName(event.target.value)} />
            <button onClick={() => {
                editTodo(editTodoName)
                history.push('/')
            }}>Edit</button>
        </div>
    )
}

export default Edit;