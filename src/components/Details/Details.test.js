import React from 'react'
import { render } from '@testing-library/react'
import Details from './Details'

test('renders Details', () => {
  const { getByText } = render(<Details />)
  const linkElement = getByText(/Details/i)
  expect(linkElement).toBeInTheDocument()
})
