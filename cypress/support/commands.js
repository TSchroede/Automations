// adds command to clear local storage from test.
Cypress.Commands.add('clearCustomLocalStorage', () => {
  localStorage.clear();
  cy.log('Clearing Custom Local Storage');
});
