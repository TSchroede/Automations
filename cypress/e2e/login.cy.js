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
    it('test1', function () {});
  });

  context('invalid password states', function () {
    it('test1', function () {});
  });

  context('success', function () {
    it('test1', function () {});
  });
});
