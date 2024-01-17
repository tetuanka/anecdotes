import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders anecdotes', () => {
  render(<App />);
  const linkElement = screen.getByText(/anecdotes/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders create new form and adds a new anecdote', () => {
  render(<App />);
  
  // Navigate to the create new page
  userEvent.click(screen.getByText(/create new/i));

  // Fill out the form
  userEvent.type(screen.getByLabelText(/content/i), 'Test Anecdote Content');
  userEvent.type(screen.getByLabelText(/author/i), 'Test Author');
  userEvent.type(screen.getByLabelText(/url for more info/i), 'https://example.com');
  
  // Submit the form
  userEvent.click(screen.getByText(/create/i));

  // Check if the new anecdote is displayed
  const newAnecdote = screen.getByText(/Test Anecdote Content/i);
  expect(newAnecdote).toBeInTheDocument();
});
