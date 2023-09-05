import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('Add task', () => {
  render(<App/>);
  const input = screen.getByPlaceholderText('New Task');
  const button = screen.getByText('Add');
  fireEvent.change(input, {target: {value: 'Some task'}});
  fireEvent.click(button);
  expect(screen.getByText('Some task')).toBeInTheDocument();
  expect(localStorage.getItem('tasks')).toContain('"text":"Some task"');
});

test('Toggle task status', () => {
  render(<App/>);
  const checkbox = screen.getByTestId('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(localStorage.getItem('tasks')).toContain('"finished":true');
});

test('Remove task', () => {
  render(<App/>);
  const deleteButton = screen.getByText('Remove');
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Some task')).not.toBeInTheDocument();
  expect(localStorage.getItem('tasks')).not.toContain('Some task');
});

test('Toggle tabs', () => {
  render(<App/>);
  const allTab = screen.getByText('All');
  const unfinishedTab = screen.getByText('Unfinished');
  const finishedTab = screen.getByText('Finished');
  fireEvent.click(allTab);
  expect(allTab).toHaveClass('active');
  fireEvent.click(unfinishedTab);
  expect(unfinishedTab).toHaveClass('active');
  fireEvent.click(finishedTab);
  expect(finishedTab).toHaveClass('active');
});
