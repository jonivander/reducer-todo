import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

export default function Todo( {todo} ) {
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000'}}>
                {todo.name}
            </span>
            <Button>Complete</Button>
            <Button>Clear Completed</Button>
        </div>
    )
}