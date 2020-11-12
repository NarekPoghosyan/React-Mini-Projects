import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo/addTodo'
import Todos from './components/TodoList/todos'
import Edit from './components/EditTodo/edit'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [index, setTodoIndex] = useState(null)
  const [todos, setTodos] = useState([])


  const addTodo = (todoName) => {
    if (!todoName) {
      alert('Wrong input data')
      return;
    }
    const allTodos = [...todos, todoName]
    setTodos(allTodos)
    localStorage.setItem('todos', JSON.stringify(allTodos))
  }

  const editTodo = (editTodoName) => {
    todos[index] = editTodoName;
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const edit = (todoIndex) => {
    setTodoIndex(todoIndex)
  }

  const removeTodo = (index) => {
    const restTodos = todos.filter((_, i) => i !== index)
    setTodos(restTodos)
    localStorage.setItem('todos', JSON.stringify(restTodos))
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [])
  }, [])

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <AddTodo addTodo={addTodo} />
            <Todos edit={edit} todosArray={todos} removeTodo={removeTodo} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/edit">
            <Edit editTodo={editTodo} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
