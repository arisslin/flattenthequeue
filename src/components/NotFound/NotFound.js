import React, { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

export default function NotFound() {
  let history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push('/')
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <main>
      <h2>404! Bitte tritt zurück ... Hier gibt es nichts zu sehen.</h2>
      <h2>
        Du wirst zur <NavLink to="/">Startseite</NavLink> weitergeleitet.
      </h2>
    </main>
  )
}
