import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

it('renders without crashing', () => {
    render(<Todo />);
});

it('creates a snapshot', () => {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});
