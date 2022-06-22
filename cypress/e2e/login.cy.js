const cypress = require('cypress');

describe('Login Page', () => {
  beforeEach(function () {
    cy.visit();
    cy.url().should('include', 'account.tagboard.com/signin');
    // exposing the login page
    cy.contains('Continue with your email').click({ force: true });
    // aliasing the inputs
    cy.get('input[name=username]').should('be.visible').as('username');
    cy.get('input[name=password]').should('be.visible').as('password');
  });

  context('invalid username states', function () {
    it('wrong username', function () {
      cy.get('@username').clear().type();
      cy.get('@password').clear().type();
      cy.contains('Wrong email or password').should('be.visible');
      cy.url().should('include', 'account.tagboard.com/signin');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
    it('no username', function () {
      cy.get('@username').clear();
      cy.get('@password').clear().type();
      cy.url().should('include', 'account.tagboard.com/signin');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
  });

  context('invalid password states', function () {
    it('wrong password', function () {
      cy.get('@username').clear().type();
      cy.get('@password').clear().type();
      cy.url().should('include', 'account.tagboard.com/signin');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });

    it('no password', function () {
      cy.get('@username').clear().type();
      cy.get('@password').clear();
      cy.url().should('include', 'account.tagboard.com/signin');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
  });

  context('success', function () {
    it('sucessful login', function () {
      cy.get('@username').clear().type();
      cy.get('@password').clear().type();
      cy.url().should('include', '');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
  });
});
