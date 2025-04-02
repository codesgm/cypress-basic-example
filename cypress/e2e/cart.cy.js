/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit('/login')
  })

  it('Add product to the cart', () => {
    cy.createUser().then((user) => {

      cy.get('[data-qa="continue-button"]').click()

      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
      .click()

      cy.contains('Your product has been added to cart.')
    })

  })
})
