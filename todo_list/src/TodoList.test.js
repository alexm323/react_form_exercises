import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';

// smokebox test
it('renders without crashing', () => {
    render(<TodoList />);
})
// snapshot
it('matches snapshot', () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();

})
// add and remove a todo
it('adds a todo to the DOM', () => {
    const todoList = render(<TodoList />);
    const taskInput = todoList.getByLabelText("todo");
    const submitBtn = todoList.getByText("Add Todo");

    expect(todoList.queryByText("Remove Task")).not.toBeInTheDocument()

    fireEvent.change(taskInput, { target: { value: "Buy potatoes" } })
    fireEvent.click(submitBtn)

    expect(todoList.queryByText("Remove Task")).toBeInTheDocument();
    expect(todoList.queryByText("Buy potatoes")).toBeInTheDocument();

    const taskRemoveBtn = todoList.getByText("Remove Task");
    fireEvent.click(taskRemoveBtn);
    expect(todoList.queryByText("Buy potatoes")).not.toBeInTheDocument();

})