/// <reference types="cypress" />

Cypress.Commands.add('tab', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).trigger('keydown', { keyCode: 9 }).trigger('keyup', { keyCode: 9 });
});