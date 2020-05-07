import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
:root {
  --main-bg-color: #F77D33;
}
  body {
    margin: 0 auto;
    max-width: 1200px;
    box-shadow: 0px 0px 12px 0px #bbb;
    background: #f8f8f8;
    font-family: 'Lato', sans-serif;;
    font-size: 18px;
    line-height: 1.4;
  }
`
