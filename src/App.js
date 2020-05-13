import React, { Suspense, lazy } from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Footer from './components/Footer'
import NotFound from './components/pages/NotFound'

const Details = lazy(() => import('./components/pages/Details'))
const About = lazy(() => import('./components/pages/About'))

export default function App() {
  return (
    <AppStyled>
      <Router>
        <Suspense fallback={<p>Lädt...</p>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/details">
              <Details />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template: auto 48px / 1fr;
  height: 100vh;
`
