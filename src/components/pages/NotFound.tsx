import React, { useEffect, FunctionComponent } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const NotFound: FunctionComponent = () => {
  const history = useHistory()

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/')
    }, 3000)
    return (): void => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <p>404! Bitte tritt zurück ... Hier gibt es nichts zu sehen.</p>
      <p>
        Du wirst zur <NavLink to="/">Startseite</NavLink> weitergeleitet.
      </p>
    </>
  )
}

export default NotFound
