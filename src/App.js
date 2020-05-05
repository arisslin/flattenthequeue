import React from 'react'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <AppStyled>
      <h1>Hello World</h1>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  color: red;
`
