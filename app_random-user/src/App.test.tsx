import { render, screen } from '@testing-library/react';
import App from './App';
import ButtonComponent from './components/ButtonComponent';

describe('ButtonComponent', () => {
  test('check if the component exist', () => {
    render(<ButtonComponent />);
    const linkElement = screen.getByText(/Get more 10 Users/i || /There are no more Users/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('onClickHandler', () => {
  test('check if the function adds +10 to the state', () => {
    render(<App />);
  });
});
