/// <reference types="cypress" />

describe('Alerts', () => {
  beforeEach(() => {
    cy.visit('/alerts');
  });

  it('Alert window', () => {
    cy.get('#alertButton').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('You clicked a button');
    })
  });

  it('Alert window after waiting', () => {
    cy.get('#timerAlertButton').click();
    cy.wait(5000);
    cy.on('window:alert', (str) => {
      expect(str).to.equal('This alert appeared after 5 seconds');
    })
  });

  it('Confirm window: click yes', () => {
    cy.get('#confirmButton').click();
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Do you confirm action?');
    })
    cy.get('#confirmResult').should('contain', 'You selected ').and('contain', 'Ok');
  });

  it('Confirm window: click cancel', () => {
    cy.get('#confirmButton').click();
    cy.on('window:confirm', () => {
      return false;
    })
    cy.get('#confirmResult').should('contain', 'You selected ').and('contain', 'Cancel');
  });

  it('Promt window', () => {
    cy.window().then(inputData => {
      cy.get('#promtButton').click();
      cy.stub(inputData, 'prompt').returns('Hello');
      cy.get('#promptResult').should('contain', 'Hello').and('contain', 'You entered ');
    })
  });

  it('Promt window: click cancel', () => {
    cy.window().then(inputData => {
      cy.get('#promtButton').click();
      cy.stub(inputData, 'prompt').returns('');
    });
    cy.get('#promptResult').should('not.exist')
  });
});