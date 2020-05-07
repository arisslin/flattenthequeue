import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <FooterStyled>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
        <Link to="/about">About</Link>
      </Navigation>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background: orange;
  color: white;
`

const Navigation = styled.nav`
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  height: 100%;
  > a {
    width: 100%;
  }
`

const Link = styled(NavLink)``
