import './commands';
import dayjs from 'dayjs';

// importing time util package
Cypress.dayjs = dayjs;

// This is a blanket bypass for unhandled exceptions thrown from the application.
Cypress.on('uncaught:exception', (err) => {
  return false;
});
