import { render, screen } from '@testing-library/react'
import React from 'react'

import Project from '.'

test('render project master', () => {
  render(<Project />)
  const linkElement = screen.getByText(/create project/i)
  expect(linkElement).toBeInTheDocument()
})
