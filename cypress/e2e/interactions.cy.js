/// <reference types="cypress" />

describe('Interactions with elements', () => {

  it('Droppable simple', () => {
    cy.visit('/droppable');
    cy.get('#droppable').should('contain.text', 'Drop here');
    cy.get('#draggable')
    .trigger('mousedown', {which: 1, pageX: 0, pageY: 0})
    .trigger('mousemove', {which: 1, pageX: 350, pageY: 50})
    .trigger('mouseup');

    cy.get('#draggable').should($el => {
      const pos = $el.position();
      expect(pos.top).to.greaterThan(50);
      expect(pos.left).to.greaterThan(350);      
    }); 
    cy.get('#droppable').should('contain.text', 'Dropped!');
  });


  it('Draggable simple', () => {
    cy.visit('/dragabble');
    cy.get('#dragBox').should('contain.text', 'Drag me');
    cy.get('#dragBox')
    .trigger('mousedown', {which:1, pageX:0, pageY: 0})
    .trigger('mousemove', {which:1, pageX:100, pageY: 100})
    .trigger('mouseup');

    cy.get('#dragBox').should($el => {
      const pos = $el.position();
      expect(pos.top).to.be.at.least(100);
      expect(pos.left).to.be.at.least(100);      
    })        
  });
  
});