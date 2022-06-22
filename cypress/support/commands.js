// adds command to clear local storage from test.
Cypress.Commands.add('clearCustomLocalStorage', () => {
  localStorage.clear();
  cy.log('Clearing Custom Local Storage');
});

// add local storage to bypass login
// Cypress.Commands.add('login', () => {
//   window.localStorage.setItem();
// });

// Building in retry to full iframe chain.
Cypress.Commands.add(
  'getIframe',
  { prevSubject: 'element' },
  ($iframe, callback = () => {}) => {
    return cy
      .wrap($iframe)
      .should((iframe) => expect(iframe.contents().find('body')).to.exist)
      .then((iframe) => cy.wrap(iframe.contents().find('body')))
      .within({}, callback);
  }
);
