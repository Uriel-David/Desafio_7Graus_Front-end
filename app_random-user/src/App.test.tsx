import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ButtonComponent from './components/ButtonComponent';

describe('ButtonComponent-Exist', () => {
  test('check if the component exist', () => {
    render(<ButtonComponent />);
    const btnComponent = screen.getByText(/Get more 10 Users/i || /There are no more Users/i);
    expect(btnComponent).toBeInTheDocument();
  });
});

describe('ButtonComponent-Values', () => {
  test('check if the function adds +10 to the state', async () => {
    const { getByTestId } = render(<App />);
    const btnNode = await waitFor(
      () => getByTestId('getUsers-button')
    );
    fireEvent.click(btnNode);
  });
});
