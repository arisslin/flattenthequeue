import React from 'react'
import { render } from '@testing-library/react'
import About from './About'

test('renders about', () => {
  const { getByText } = render(<About />)
  const linkElement = getByText(/about/i)
  expect(linkElement).toBeInTheDocument()
})
