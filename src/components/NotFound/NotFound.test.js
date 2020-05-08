import React from 'react'
import { render } from '@testing-library/react'
import NotFound from './NotFound'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders 404', () => {
  const { getByText } = render(
    <Router>
      <NotFound />
    </Router>
  )
  const content = getByText(/404/i)
  expect(content).toBeInTheDocument()
})
