/// <reference types="cypress" />

describe('Tool Tips', () => {
  before(() => {
    cy.visit('/tool-tips')
  });

  it('check tool tip', () => {
    cy.get('#toolTipButton').trigger('mouseover');
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button');
  });
});