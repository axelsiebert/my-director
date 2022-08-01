/**
 * App component tests
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2020 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 09. November 2020
 *
 */

// Third-party dependencies
import * as React from 'react';
import { render, screen } from '@testing-library/react';

// Component
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('pAir Arrangement Rechner');
  expect(linkElement).toBeInTheDocument();
});
