import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
    }
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }
    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <h2>Todo list:</h2>
            <ul>
                {todos.map(todo => <Todo task={todo.todo} handleRemove={removeTodo} id={todo.id} key={todo.id} />)}
            </ul>

        </div>

    )
}

export default TodoList;

// TodoList - this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.