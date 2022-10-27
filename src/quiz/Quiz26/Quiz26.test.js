import { render, screen, fireEvent } from '@testing-library/react';
import Quiz26, { replaceCamelWithSpaces } from './Quiz26';

test('change background color of button', () => {
  render(<Quiz26 />);
  const button = screen.getByRole('button');

  expect(button).toHaveTextContent('Change to Midnight Blue');
  
  // 'initial background color
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button to change background color of button
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });

  expect(button).toHaveTextContent('Change to Medium Violet Red');

  // click button to change background color of button
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

});



describe('test replace camel with spaces', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one  inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});