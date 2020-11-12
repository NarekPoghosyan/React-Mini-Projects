import React from 'react'
import { useHistory } from 'react-router-dom'
import './todosStyle.scss'

function Todos({ edit, todosArray, removeTodo }) {
    const history = useHistory()

    return (
        <div className="list">
            {todosArray.map((todo, index) => {
                return (
                    <ul>
                        <div className="todo_number">{index < 9 ? '0' + (index + 1): index + 1}.</div>
                        <li key={index} onClick={() => {
                            edit(index)
                            history.push('/edit')
                        }}>{todo}</li>
                        <button onClick={() => removeTodo(index)}>Delete</button>
                    </ul>
                )
            })}
        </div>
    )
}

export default Todos;