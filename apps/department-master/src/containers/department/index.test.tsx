import { render, screen } from '@testing-library/react'
import React from 'react'

import Department from '.'

test('renders learn react link', () => {
  render(<Department />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
