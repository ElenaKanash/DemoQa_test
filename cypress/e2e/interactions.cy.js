/// <reference types="cypress" />

describe('Interactions with elements', () => {

  it('draggable simple', () => {
    cy.visit('/dragabble');

    cy.get('#dragBox')
    .trigger('mousedown', {which:1, pageX:0, pageY: 0})
    .trigger('mousemove', {which:1, pageX:100, pageY: 100})
    .trigger('mouseup');

    cy.get('#dragBox').should($el => {
      const pos = $el.position();
      expect(pos.top).to.greaterThan(100);
      expect(pos.left).to.be.at.least(100);      
    })
    
  });
  
});