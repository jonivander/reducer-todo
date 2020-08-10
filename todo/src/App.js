import React, { useReducer, useState } from 'react';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Input, Button } from 'reactstrap'; 
import './App.css';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
  CLEAR_TODO: 'clear-todo'
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
    case ACTIONS.DELETE_TODO: 
      return todos.filter(todo => todo.id != action.payload.id)
    default:
      return todos
    case ACTIONS.CLEAR_TODO:
      return todos.filter(todo => !todo.complete)
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
      <h1>Whatchu gotta do?!</h1> 
      <Input type ='text' value ={name} onChange={e => setName(e.target.value)} />
    
    {todos.map(todo => {
      return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
    })}
    <Button onClick={() => dispatch({ type: ACTIONS.CLEAR_TODO })}>Clear Completed</Button>
    </Form>
    </>
  );
}

export default App;
