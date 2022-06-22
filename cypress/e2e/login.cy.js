describe('Login Page', () => {
  beforeEach(function () {
    cy.visit();
    cy.url().should('include', 'account.tagboard.com/signin');
    // exposing the login page
    cy.contains('Continue with your email').click({ force: true });
    // aliasing the inputs
    cy.get('input[name=username]').as('username');
    cy.get('input[name=password]').as('password');
  });

  context('invalid username states', function () {
    it('wrong username', function () {
      cy.get('@username').should('be.visible').clear().type();
      cy.get('@password').clear().type();

      cy.contains('Wrong email or password').should('be.visible');
      cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
    });
    it('no username', function () {});
    cy.get('@username').should('be.visible').clear();
    cy.get('@password').clear().type();
    cy.screenshot(`${Cypress.spec.name} : ${Cypress.currentTest.title}`);
  });

  context('invalid password states', function () {
    it('wrong password', function () {});
    it('no password', function () {});
  });

  context('success', function () {
    it('sucessful login', function () {});
  });
});
