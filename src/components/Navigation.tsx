import React, { FunctionComponent } from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faInfo,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

const Navigation: FunctionComponent = () => {
  return (
    <Nav>
      <NavLink aria-label="Go to the start page to search for shops." to="/">
        <Icon className="icon" icon={faSearch} />
      </NavLink>
      <NavLink
        aria-label="See the details of a supermarket that you have chosen beforehand."
        to="/details"
      >
        <Icon className="icon" icon={faShoppingCart} />
      </NavLink>
      <NavLink
        aria-label="Get to the about page containing information about this app as well as the imprint, terms of use and privacy policy."
        to="/about"
      >
        <Icon className="icon" icon={faInfo} />
      </NavLink>
    </Nav>
  )
}

export default Navigation

const Nav = styled.nav`
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  grid-gap: 2px;
  height: 100%;
  background: #fff;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: var(--main-bg-color);
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: white;
`
