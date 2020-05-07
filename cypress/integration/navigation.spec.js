context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('clicks the links in the navigation in the footer and checks the resulting location', () => {
    cy.get('nav').get('a[href="/"]').click()

    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('nav').get('a[href="/details"]').click()

    cy.url().should('eq', 'http://localhost:3000/details')

    cy.get('nav').get('a[href="/about"]').click()

    cy.url().should('eq', 'http://localhost:3000/about')
  })

  it('tests the correct paths with back and forward clicking', () => {
    cy.get('nav').get('a[href="/details"]').click()
    cy.get('nav').get('a[href="/about"]').click()

    cy.url().should('eq', 'http://localhost:3000/about')

    cy.go('back')
    cy.url().should('eq', 'http://localhost:3000/details')

    cy.go('back')
    cy.url().should('eq', 'http://localhost:3000/')

    cy.go('forward')
    cy.url().should('eq', 'http://localhost:3000/details')

    cy.go('forward')
    cy.url().should('eq', 'http://localhost:3000/about')
  })

  it('goes to the same page when reloading', () => {
    // https://on.cypress.io/reload
    cy.reload(true)
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('nav').get('a[href="/details"]').click()
    cy.reload()
    cy.url().should('eq', 'http://localhost:3000/details')

    cy.get('nav').get('a[href="/about"]').click()
    cy.reload()
    cy.url().should('eq', 'http://localhost:3000/about')
  })

  it('redirects to the home page when an unknown path is opend', () => {
    cy.visit('http://localhost:3000/bullshit')
    cy.url().should('eq', 'http://localhost:3000/bullshit')
    cy.contains('404')

    cy.wait(3000)
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
