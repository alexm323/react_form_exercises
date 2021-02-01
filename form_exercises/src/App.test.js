import React from "react";
import { render } from '@testing-library/react';
import App from './App';

// create a smoke test for the <App/> component 

it("renders without crashing", function () {
  render(<App />)
});

// lets save a snapshot test ,

it("matches snapshot", () => {
  // asFragement returns a Document Fragment of our component
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot();
})

