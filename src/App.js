import React, { Suspense, lazy } from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

const Details = lazy(() => import('./components/Details/Details'))
const About = lazy(() => import('./components/About/About'))

export default function App() {
  return (
    <AppStyled>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Suspense fallback={<p>Lade ...</p>}>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Suspense>
        </Switch>
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
