/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit('/login')
  })

  it('Sign In success', () => {
    cy.createUser()
  })

  it('Sign with existent user', () => {
    cy.createUser().then((user) => {

      cy.get('[data-qa="continue-button"]').click()

      cy.get('.shop-menu > .nav > :nth-child(4)').click()
      cy.visit('/login')

      cy.get('[data-qa="signup-name"]')
        .type(user.firstName)

      cy.get('[data-qa="signup-email"]')
        .type(user.email)

      cy.get('[data-qa="signup-button"]')
        .click()

      cy.contains('Email Address already')
    })

  })
})
