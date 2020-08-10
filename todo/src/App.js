import React, { useReducer, useState } from 'react';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Input } from 'reactstrap'; 
import './App.css';

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO: 
      return todos.map(todo => {
        if( todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo 
      })
  }
}

function newTodo (name) {
  return {id: Date.now(), name: name, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Input type ='text' value ={name} onChange={e => setName(e.target.value)} />
    </Form>
    {todos.map(todo => {
      return <Todo key={todo.id} todo={todo} />
    })}
    </>
  );
}

export default App;
