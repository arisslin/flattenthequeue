import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders flatten the queue', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/flatten the queue/i)
  expect(linkElement).toBeInTheDocument()
})
