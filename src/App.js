import React, { Suspense, lazy } from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'

const Details = lazy(() => import('./components/Details/Details'))
const About = lazy(() => import('./components/About/About'))

export default function App() {
  return (
    <AppStyled>
      <Router>
        <Switch>
          <Route to="/">
            <Home />
          </Route>
          <Suspense fallback={<p>Loading ...</p>}>
            <Route to="/details">
              <Details />
            </Route>
            <Route to="/about">
              <About />
            </Route>
          </Suspense>
        </Switch>
      </Router>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  color: red;
`
