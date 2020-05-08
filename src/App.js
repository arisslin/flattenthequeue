import React, { Suspense, lazy } from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'

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
          <Route exact path="/details">
            <Suspense fallback={<p>Lade ...</p>}>
              <Details />
            </Suspense>
          </Route>
          <Route exact path="/about">
            <Suspense fallback={<p>Lade ...</p>}>
              <About />
            </Suspense>
          </Route>
          <Route>
            <Suspense fallback={<p>Lade ...</p>}>
              <NotFound />
            </Suspense>
          </Route>
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
