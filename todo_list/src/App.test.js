import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />)
})

test('snapshot test', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})