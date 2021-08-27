const { auth } = require('../../../firebase');

describe('Study Buddy App | Navigation routing', () => {
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
  it('Checks group navigation', () => {
    cy.findByText('B').click();
    cy.findByText(/Group B/i).should('exist');

    cy.findByText('A').click();
    cy.findByText(/Group A/i).should('exist');

    cy.findByText('C').click();
    cy.findByText(/Group C/i).should('exist');

    cy.go('back');
    cy.findByText('Group A').should('exist');
  });
  it('Checks app navigation', () => {
    cy.findByText('Notes').click();
    cy.findByText("Teacher's Notes").should('exist');

    cy.findByText('Todolist').click();
    cy.findByText('What you have to do?').should('exist');

    cy.findByText('Dashboard').click();
    cy.findAllByText(/Group/i).should('exist');

    cy.findByText('Logout').click();
    cy.findByText('Login').should('exist');
  });
});
