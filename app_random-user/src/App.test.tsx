import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import ButtonComponent from './components/ButtonComponent';

describe('App-Render', () => {
  test('check if the component render', () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});

describe('ButtonComponent-Render', () => {
  test('check if the component render', () => {
    const div = document.createElement("div");
    ReactDOM.render(<ButtonComponent />, div);
  });
});

describe('ButtonComponent-Correct-Text', () => {
  test('check that the component has the correct text', () => {
    render(<ButtonComponent />);
    const btnComponent = screen.getByText(/Get more 10 Users/i || /There are no more Users/i);
    expect(btnComponent).toBeInTheDocument();
  });
});

describe('ButtonComponent-Click', () => {
  test('check if the component ', async () => {
    const { getByTestId } = render(<App />);
    const btnNode = await waitFor(
      () => getByTestId('getUsers-button')
    );
    fireEvent.click(btnNode);
  });
});
