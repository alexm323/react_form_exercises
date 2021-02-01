import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('renders without crashing', () => {
    render(<NewTodoForm />);
});

it('matches a snapshot', () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});