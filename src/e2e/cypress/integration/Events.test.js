/* eslint-disable jest/valid-expect-in-promise */
const { auth } = require('../../../firebase');

describe('Study Buddy App | Events check', () => {
  before(() => {
    auth.signOut();
    cy.visit('/');
    cy.findAllByText(/Login/i).first().click().type('test@test.com');
    cy.findByText(/Password/i)
      .click()
      .type('test123456');
    cy.findByText(/Login in/i).click();
    cy.findByText(/Logged as/i).should('exist');
  });

  it('Checks events display', () => {
    cy.findByText(/show group events/i).click();
    cy.findByText(/ADP/i).should('exist');

    cy.visit('/group/B');
    cy.findByText(/show group events/i).click();
    cy.findByText(/ADP/i).should('not.exist');
  });
});
