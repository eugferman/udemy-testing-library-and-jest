import { render, screen, fireEvent, logRoles } from '@testing-library/react';

import Button from './Button';

test('renders learn react button role and modify styles and text', () => {
  // const { container } = render(<Button />);
  // logRoles(container);
  render(<Button />);
  const linkElement = screen.getByRole('button', { name: /Change to/i });
  expect(linkElement).toBeInTheDocument();
});

test("button has correct initial color", () => {
  render(<Button />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});
