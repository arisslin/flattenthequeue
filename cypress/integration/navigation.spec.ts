const url = Cypress.config().baseUrl

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('clicks the links in the navigation in the footer and checks the resulting location', () => {
    cy.get('nav').get('a[href="/"]').click()

    cy.url().should('eq', url)

    cy.get('nav').get('a[href="/details"]').click()

    cy.url().should('eq', `${url}details`)

    cy.get('nav').get('a[href="/about"]').click()

    cy.url().should('eq', `${url}about`)
  })

  it('tests the correct paths with back and forward clicking', () => {
    cy.get('nav').get('a[href="/details"]').click()
    cy.get('nav').get('a[href="/about"]').click()

    cy.url().should('eq', `${url}about`)

    cy.go('back')
    cy.url().should('eq', `${url}details`)

    cy.go('back')
    cy.url().should('eq', url)

    cy.go('forward')
    cy.url().should('eq', `${url}details`)

    cy.go('forward')
    cy.url().should('eq', `${url}about`)
  })

  it('goes to the same page when reloading', () => {
    // https://on.cypress.io/reload
    cy.reload(true)
    cy.url().should('eq', url)

    cy.get('nav').get('a[href="/details"]').click()
    cy.reload()
    cy.url().should('eq', `${url}details`)

    cy.get('nav').get('a[href="/about"]').click()
    cy.reload()
    cy.url().should('eq', `${url}about`)
  })

  it('redirects to the home page when an unknown path is opend', () => {
    cy.visit(`${url}bullsh*t`)
    cy.url().should('eq', `${url}bullsh*t`)
    cy.contains('404')

    cy.wait(3000)
    cy.url().should('eq', url)
  })
})
