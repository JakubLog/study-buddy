const { auth } = require('../../../firebase');

describe('Study Buddy App | Searchbar mechanics', () => {
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

  it('Checks does searchbar is visible when focused', () => {
    cy.findByPlaceholderText('Find student').should('exist');
    cy.findByPlaceholderText('Find student').click().type('a');
    cy.findByLabelText(/hint wrapper/i).should('be.visible');
    cy.findByPlaceholderText('Find student').clear();
    cy.findByLabelText(/hint wrapper/i).should('be.not.visible');
  });

  it('Checks does searchbar works', () => {
    cy.findByPlaceholderText('Find student').click().type('Lonnie');
    cy.findByLabelText(/hint wrapper/i)
      .children()
      .findByText('Lonnie Deckow')
      .should('exist');
    cy.findByLabelText(/hint wrapper/i)
      .children()
      .findByText('Lonnie Deckow')
      .click();
    cy.findByPlaceholderText('Find student').should('have.value', 'Lonnie Deckow');
    cy.findByPlaceholderText('Find student').clear();
    cy.findByPlaceholderText('Find student').should('have.not.value', 'Lonnie Deckow');
  });
});
