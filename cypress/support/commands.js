import { faker } from '@faker-js/faker';

Cypress.Commands.add('createUser', () => {
    const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 12, memorable: true }) + '@123',
        address: faker.location.streetAddress(),
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobileNumber: faker.phone.number('##########'),
        day: faker.number.int({ min: 1, max: 28 }).toString(),
        month: faker.number.int({ min: 1, max: 12 }).toString(),
        year: faker.number.int({ min: 1970, max: 2000 }).toString()
    }

    cy.get('[data-qa="signup-name"]')
        .type(user.firstName)

    cy.get('[data-qa="signup-email"]')
        .type(user.email)

    cy.get('[data-qa="signup-button"]')
        .click()

    cy.get(':nth-child(3) > .top > [data-qa="title"]')
        .click()

    cy.get('[data-qa="password"]')
        .type(user.password)

    cy.get('#days')
        .select(user.day)

    cy.get('#months')
        .select(user.month)

    cy.get('#years')
        .select(user.year)

    cy.get('[data-qa="first_name"]')
        .type(user.firstName)

    cy.get('[data-qa="last_name"]')
        .type(user.lastName)

    cy.get('[data-qa="address"]')
        .type(user.address)

    cy.get('[data-qa="country"]')
        .select("Canada")

    cy.get('[data-qa="state"]')
        .type(user.state)

    cy.get('[data-qa="city"]')
        .type(user.city)

    cy.get('[data-qa="zipcode"]')
        .type(user.zipcode)

    cy.get('[data-qa="mobile_number"]')
        .type(user.mobileNumber)

    cy.get('[data-qa="create-account"]')
        .click()

    cy.contains('Account Created!')

    cy.wrap(user)
})
