/// <reference types="cypress" />

describe('Login Page', () => {
  const username = 'webmaster@tagboard.com';
  const password = 'zty7qxh.wce7xrj0HMU';

  beforeEach(function () {
    cy.visit('/');
    cy.url().should('include', 'account.tagboard.com/signin');
    // exposing the login page
    cy.contains('Continue with your email').click({ force: true });
    cy.url().should('include', '/login');

    // aliasing the inputs
    cy.get('input[name=username]').should('be.visible').as('username');
    cy.get('input[name=password]').should('be.visible').as('password');
  });

  context('invalid username states', function () {
    it('wrong username', function () {
      cy.get('@username').clear().type(`${username}1`);
      cy.get('@password').clear().type(`${password}{enter}`);
      cy.contains('Wrong email or password').should('be.visible');
      cy.url().should('include', '/login');
      cy.getCookie(
        'user.343faffa-5d0b-4958-905e-6c59d3c1f3e8.displayName'
      ).should('not.exist');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
    it('no username', function () {
      cy.get('@username').clear();
      cy.get('@password').clear().type(`${password}{enter}`);
      cy.url().should('include', '/login');
      cy.getCookie(
        'user.343faffa-5d0b-4958-905e-6c59d3c1f3e8.displayName'
      ).should('not.exist');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
  });

  context('invalid password states', function () {
    it('wrong password', function () {
      cy.get('@username').clear().type(`${username}`);
      cy.get('@password').clear().type(`${password}1{enter}`);
      cy.url().should('include', '/login');
      cy.getCookie(
        'user.343faffa-5d0b-4958-905e-6c59d3c1f3e8.displayName'
      ).should('not.exist');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });

    it('no password', function () {
      cy.get('@username').clear().type(`${username}`);
      cy.get('@password').clear();
      cy.url().should('include', '/login');
      cy.getCookie(
        'user.343faffa-5d0b-4958-905e-6c59d3c1f3e8.displayName'
      ).should('not.exist');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
  });

  context('success', function () {
    it('sucessful login', function () {
      cy.get('@username').clear().type(`${username}`);
      cy.get('@password').clear().type(`${password}{enter}`);
      cy.url().should('include', 'https://account.tagboard.com/dashboard');
      cy.getCookie(
        'user.343faffa-5d0b-4958-905e-6c59d3c1f3e8.displayName'
      ).should('have.property', 'value', 'webmaster');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
  });
});
