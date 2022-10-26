import { render, screen, fireEvent } from '@testing-library/react';
import Quiz21 from './Quiz21';

test('enable and disable button with onChange checkbox', () => {
  render(<Quiz21 />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button');
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByTestId('quiz21');
  expect(checkbox).not.toBeChecked();

  // click checkbox
  fireEvent.click(checkbox);

  // button would be disabled
  expect(colorButton).toBeDisabled();

  // check that the checkbox starts out unchecked
  expect(checkbox).toBeChecked();

  // click checkbox
  fireEvent.click(checkbox);

  // button would be disabled
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  expect(checkbox).not.toBeChecked();

});