import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import AddButtonComponent from './components/AddButtonComponent';
import SubButtonComponent from './components/SubButtonComponent';

describe('App-Render', () => {
  test('check if the component render', () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});

describe('AddButtonComponent-Render', () => {
  test('check if the component render', () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddButtonComponent />, div);
  });
});

describe('AddButtonComponent-Correct-Text', () => {
  test('check that the component has the correct text', () => {
    render(<AddButtonComponent />);
    const btnAddComponent = screen.getByText(/Get more 10 Users/i || /There are no more Users/i);
    expect(btnAddComponent).toBeInTheDocument();
  });
});

describe('AddButtonComponent-Click', () => {
  test('check if the component click', async () => {
    const { getByTestId } = render(<App />);
    const btnNode = await waitFor(
      () => getByTestId('getUsers-button')
    );
    fireEvent.click(btnNode);
    const btnAddComponent = screen.getByText(/Get more 10 Users/i);
    expect(btnAddComponent).toBeInTheDocument();
  });
});

describe('SubButtonComponent-Render', () => {
  test('check if the component render', () => {
    const div = document.createElement("div");
    ReactDOM.render(<SubButtonComponent />, div);
  });
});

describe('SubButtonComponent-Correct-Text', () => {
  test('check that the component has the correct text', () => {
    render(<SubButtonComponent />);
    const btnSubComponent = screen.getByText(/There is no allows less Users/i || /Remove 10 Users/i);
    expect(btnSubComponent).toBeInTheDocument();
  });
});

describe('SubButtonComponent-Click', () => {
  test('check if the component click', async () => {
    const { getByTestId } = render(<App />);
    const btnNode = await waitFor(
      () => getByTestId('removeUsers-button')
    );
    fireEvent.click(btnNode);
    const btnSubComponent = screen.getByText(/There is no allows less Users/i);
    expect(btnSubComponent).toBeInTheDocument();
  });
});