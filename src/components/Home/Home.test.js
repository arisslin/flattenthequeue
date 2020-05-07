import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

test('renders flatten the queue', () => {
  const { getByText } = render(<Home />)
  const linkElement = getByText(/flatten the queue/i)
  expect(linkElement).toBeInTheDocument()
})
