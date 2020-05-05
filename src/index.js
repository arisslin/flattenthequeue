import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './common/GlobalStyles'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
)

serviceWorker.unregister()
