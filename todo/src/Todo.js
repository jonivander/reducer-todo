import React from 'react';
import { ACTIONS } from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Input } from 'reactstrap';

export default function Todo( {todo, dispatch} ) {
    return (
        <>
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000'}}>
                {todo.name}
            </span>
            <Input 
                type='checkbox' 
                onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}
                >Done!
            </Input>
            
        </div>
        </> 
    )
}