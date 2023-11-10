/// <reference types="cypress" />

describe('Tool Tips', () => {
  before(() => {
    cy.visit('https://demoqa.com/tool-tips')
  });

  it('check tool tip', () => {
    cy.get('#toolTipButton').trigger('mouseover');
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button');
  });
});