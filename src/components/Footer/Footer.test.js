import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders Footer', () => {
  const { getByRole } = render(
    <Router>
      <Footer />
    </Router>
  )
  const role = getByRole('contentinfo')
  expect(role).toBeInTheDocument()
})
