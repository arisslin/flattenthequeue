import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Navigation from './Navigation'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders links to pages: /, /about, /details ', () => {
  const { container } = render(
    <Router>
      <Navigation />
    </Router>
  )
  const links = [...container.querySelectorAll('a')]
  expect(links.length).toBe(3)
  expect(links.some((a) => a.href === document.location.href)).toBe(true)
  expect(links.some((a) => a.href === `${document.location.href}about`)).toBe(
    true
  )
  expect(links.some((a) => a.href === `${document.location.href}details`)).toBe(
    true
  )
})

test('navigation to specified routes', () => {
  const { container } = render(
    <Router>
      <Navigation />
    </Router>
  )
  // verify url after each link click
  const links = [...container.querySelectorAll('a')]
  expect(links.length).toBe(3)
  links.forEach((link) => {
    fireEvent.click(link)
    expect(document.location.href).toBe(link.href)
  })
})
