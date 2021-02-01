import React from 'react';
import { render } from '@testing-library/react';
import NewBoxForm from "./NewBoxForm";

// smokebox test 

it("renders without crashing", () => {
    render(<NewBoxForm />);
});
it("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});