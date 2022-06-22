/// <reference types="cypress" />

describe('Dashboard Smoke Test', () => {
  // env variables
  const username = Cypress.env('username');
  const password = Cypress.env('password');

  before(function () {
    cy.visit('/');
    cy.url().should('include', 'account.tagboard.com/signin');
    // exposing the login page
    cy.contains('Continue with your email').click({ force: true });
    cy.url().should('include', '/login');

    // aliasing the inputs
    cy.get('input[name=username]').should('be.visible').as('username');
    cy.get('input[name=password]').should('be.visible').as('password');
    cy.get('@username').clear().type(`${username}`);
    cy.get('@password').clear().type(`${password}{enter}`);
    cy.url().should('include', 'https://account.tagboard.com/dashboard');
  });

  context('Elements are visible', function () {
    it('Top Navigation', function () {
      cy.get('#tgb-navbar').then(function () {
        cy.get('#navbarBrandIcon').should('be.visible');
        cy.get('#navbarBrandTitle').should('be.visible');
        cy.get('#helpIcon').should('be.visible');
        cy.get('#applicationLauncherIcon').should('be.visible');
        cy.get('#accountDropdownIcon').should('be.visible');
      });
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
    it('Left Navigation', function () {
      cy.get('.left-rail').then(function () {
        cy.get('.user-info').should('be.visible');
        cy.get('.my-tagboards-link').should('be.visible');
        cy.get('.user-theme-tab').should('be.visible');
        cy.get('.user-admin-tab').should('be.visible');
        cy.get('[data-original-title="Media Library"]').should('be.visible');
        cy.get('[data-original-title="My Profile"]').should('be.visible');
        cy.get('[data-original-title="Account Connections"]').should(
          'be.visible'
        );
        cy.get('.api-tab').should('be.visible');
      });
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
  });
  it('tagboards', function () {
    cy.get('#tagboards').should('be.visible');

    // using custom iframe command to retry until body is loaded.
    cy.get('#tagboards > iframe').getIframe(() => {
      cy.get('.tagboards.clearfix').should('be.visible');
    });
    cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
  });
});
