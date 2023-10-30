/// <reference types="cypress" />

const expectedNames = [
  'Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'
]

describe('Main page', () => {
  it('Check one element ', () => {
    cy.visit('https://demoqa.com/');
    cy.get('div.card:first-child').click();
    cy.url().should('equal', 'https://demoqa.com/elements');
    /*  cy.get('div.main-header')
       .should('be.visible')
       .and('have.text', 'Elements'); */
    cy.get('div.main-header')
      .then(($el) => {
        let textEl = $el.text()
        expect(textEl).to.equal('Elements')
        cy.log(textEl);             
      })
  });

  it('Check many elements with JQuery', () => {
    cy.visit('https://demoqa.com/');
    /* cy.get('div.card')
      .should('have.length', 6)
      .then(($els) => {
        const nameElements = Cypress.$.makeArray($els)
          .map(($el) => $el.innerText);       
        expect(nameElements).to.be.deep.equal(expectedNames)*/

    cy.get('div.card')
      .should('have.length', 6)
      .then(($els) => {
        return Cypress.$.makeArray($els)
          .map(($el) => $el.innerText);
      }).should('deep.eql', expectedNames);
  })

  it('Check many elements with cypress method', () => {
    cy.visit('https://demoqa.com/');
    cy.get('div.card')
      .each(($el, idx) => {
        const nameElement = $el.text();       
        expect(nameElement).to.be.eql(expectedNames[idx])
      })
  })

  it.only('Check many elements with Lodash', () => {
    cy.visit('https://demoqa.com/');
    cy.get('div.card')
      .should('have.length', 6)
      .then(($els) => {
        return Cypress._.map(Cypress.$.makeArray($els), 'innerText');
      })
      .should('deep.eql', expectedNames);
  })

});