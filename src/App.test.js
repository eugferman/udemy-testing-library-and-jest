import { render, screen } from '@testing-library/react';
import App from './App';

// nos chequea que en el componente <App /> hay un texto que dice learn react
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link role', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react button role', () => {
  render(<App />);
  const linkElement = screen.getByRole('button', { name: /test button/i });
  expect(linkElement).toBeInTheDocument();
});

// nos chequea que en el componente <App /> hay un texto que dice save to reload
test('renders react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/save to reload/i);
  expect(linkElement).toBeInTheDocument();
});

// si no se testea nada nos lo dará como OK
test('empty test', () => {
});

// aunque no se testee nada, si creamos un Error nos lo lanzará
test('empty test with new Error', () => {
  // throw new Error('test failed');
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', { name: 'App Checkbox' });
  expect(checkbox).not.toBeChecked();
});
