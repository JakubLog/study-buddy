const { auth } = require('../../../firebase');

describe('Study Buddy App', () => {
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

  it('Checks is todos render', () => {
    cy.visit('/todolist');
    cy.findByText('What you have to do?').should('exist');
  });

  it('Adds new todo', () => {
    cy.findByText('What you have to do?').click().type('Cypress todo');
    cy.findByText('Write note about task').click().type('Cypress todo content');
    cy.findByText('Add task').click();

    cy.findAllByText('Cypress todo content').should('exist');
  });

  it('Removes & changes new todo', () => {
    cy.findAllByText('Cypress todo content').first().parent().findByLabelText('Todo change').click();
    cy.findAllByText('Cypress todo content').should('exist');
    cy.findAllByText('Cypress todo content').first().parent().findByLabelText('Todo remove').click();
    cy.findAllByText('Cypress todo content').should('not.exist');
  });
});
