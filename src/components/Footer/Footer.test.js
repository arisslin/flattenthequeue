import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders Footer', () => {
  const { container } = render(
    <Router>
      <Footer />
    </Router>
  )
  const footer = container.querySelector('footer')
  expect(footer).toBeInTheDocument()
})
