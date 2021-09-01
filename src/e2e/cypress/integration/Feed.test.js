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

  it('Renders news feed section', () => {
    cy.findAllByText(/Read more/i).should('exist');
  });

  it('Checks is all working fine', () => {
    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.findAllByText(/Read more/i)
      .first()
      .parent()
      .findByLabelText('Feed title')
      .then(($title) => {
        cy.findAllByText(/Read more/i)
          .first()
          .click({ force: true });
        cy.findByLabelText('feed').findByText($title.text()).should('exist');
      });
  });
});
