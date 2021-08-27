const { auth } = require('../../../firebase');

describe('Study Buddy App | Authorization mechanics', () => {
  beforeEach(() => {
    auth.signOut();
  });

  it('Renders unauthorized view', () => {
    cy.visit('/');
    cy.findAllByText(/Login/i);
  });

  it('Checks authorization mechanics', () => {
    cy.visit('/');
    cy.findAllByText(/Login/i).first().click().type('test@test.com');
    cy.findByText(/Password/i)
      .click()
      .type('test123456');
    cy.findByText(/Login in/i).click();
    cy.findByText(/Logged as/i).should('exist');
  });
});
