import React, { Suspense, lazy } from 'react'
import styled from 'styled-components/macro'
import Home from './components/Home/Home'

const Details = lazy(() => import('./components/Details/Details'))
const About = lazy(() => import('./components/About/About'))

export default function App() {
  return (
    <AppStyled>
      <Home />
      <Suspense fallback={<p>Loading ...</p>}>
        <Details />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <About />
      </Suspense>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  color: red;
`
