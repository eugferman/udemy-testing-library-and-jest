import { render, screen, fireEvent } from '@testing-library/react';
import Quiz22 from './Quiz22';

test('change style of button with onChange checkbox and click in button', () => {
  render(<Quiz22 />);
  const button = screen.getByRole('button');
  const checkbox = screen.getByTestId('quiz22');
  
  // click unchecked to checked to verify background color of button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  // click checked to unchecked to verify background color of button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "red" });

  // click in button to change from red to blue
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });

  // click unchecked to checked to verify background color of button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

});

test('verify enable and disable button', () => {
  render(<Quiz22 />);
  const button = screen.getByRole('button');
  const checkbox = screen.getByTestId('quiz22');
  
  // click unchecked to checked to verify if button is disabled
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  // click checked to unchecked to verify if button is enabled
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

});