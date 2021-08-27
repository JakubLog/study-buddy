const { auth } = require('../../../firebase');

describe('Study Buddy App | Note mechanics', () => {
  before(() => {
    auth.signOut();
    cy.visit('/');
    cy.findAllByText(/Login/i).first().click().type('test@test.com');
    cy.findByText(/Password/i)
      .click()
      .type('test123456');
    cy.findByText(/Login in/i).click();
    cy.findByText(/Logged as/i).should('exist');
    cy.visit('/notes');
  });

  it('Checks notes rendering', () => {
    cy.findByText("Teacher's Notes").should('exist');
  });

  it('Checks notes adding', () => {
    cy.findByText('Title').click().type('Cypress test title');
    cy.findByText('Content').click().type('Cypress test content');
    cy.findByText('Add note').click();
    cy.findAllByText(/Cypress/i).should('exist');
  });

  it('Checks notes removing', () => {
    cy.findAllByText(/Cypress/i)
      .parent()
      .findByLabelText('Note delete button')
      .click();
    cy.findAllByText(/Cypress/i).should('not.exist');
  });
});
