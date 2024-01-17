import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './src/App';
import '@testing-library/jest-dom/extend-expect';


test('renders software anecdotes header', () => {
  render(<App />);
  expect(screen.getByText('Software anecdotes')).toBeVisible()
});
