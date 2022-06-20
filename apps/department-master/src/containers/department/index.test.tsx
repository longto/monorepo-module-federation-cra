import { render, screen } from '@testing-library/react'
import React from 'react'

import Department from '.'

test('render department master', () => {
  render(<Department />)
  const linkElement = screen.getByText(/Create department/i)
  expect(linkElement).toBeInTheDocument()
})
