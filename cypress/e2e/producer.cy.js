/// <reference types="cypress" />

describe('Producer Smoke Test', () => {
  const username = 'webmaster@tagboard.com';
  const password = 'zty7qxh.wce7xrj0HMU';

  before(function () {
    cy.visit('https://producer.tagboard.com/');
    cy.url().should('include', 'https://producer.tagboard.com/');
    // exposing the login page
    cy.contains('Continue with your email').click({ force: true });
    cy.url().should('include', '/login');

    // aliasing the inputs
    cy.get('input[name=username]').should('be.visible').as('username');
    cy.get('input[name=password]').should('be.visible').as('password');
    cy.get('@username').clear().type(`${username}`);
    cy.get('@password').clear().type(`${password}{enter}`);

    // wait for navigation to complete
    cy.url().should('include', 'https://producer.tagboard.com/');
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
    });
    it('Productions Table', function () {
      cy.get('.productions-table').then(function () {
        cy.contains('Tell your story with Tagboard Producer').should(
          'be.visible'
        );
        cy.get('.account-select')
          .should('be.visible')
          .within(function () {
            cy.get('.tb-btn').should('be.enabled');
          });

        cy.get('.productions-list')
          .should('be.visible')
          .within(function () {
            cy.get('.card').should('have.length', 92).first().as('card');
            cy.get('@card').within(function () {
              cy.get('.card-info').should('be.visible');
              cy.get('.card-title').should('be.visible');
              cy.get('.card-subtitle').should('be.visible');
              cy.get('.card-actions').should('be.visible');
              cy.get('.high-em').should('be.visible');
              cy.get('[title="Delete production"]').should('be.visible');
              cy.get('[title="Duplicate production"]').should('be.visible');
            });
          });
      });
    });
  });
});
