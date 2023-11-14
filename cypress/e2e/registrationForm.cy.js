/// <reference types="cypress" />

describe('Registration form', () => {

  before(() => {    
    cy.visit('/automation-practice-form');    
  });

  it('Check Student Registration Form', () => {

    cy.get('#firstName').type('Ivan').clear().type('Ivan');    
    cy.get('#lastName').type('Ivanov');

    cy.get('#userEmail').type('Ivanov-test@gmail.com');

    cy.get('#gender-radio-1').check({ force: true }).should('be.checked')

    cy.get('#userNumber').type('11111111').should('be.visible');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('June').should('have.value', '5');
    cy.get('.react-datepicker__year-select').select('2003').should('have.value', '2003');
    cy.get('.react-datepicker__day--001').eq(0).click();

    cy.get('#subjectsInput').type('math').type('{enter}');

    cy.get('#hobbies-checkbox-1').check({ force: true }).should('be.checked');

    //cy.get('#uploadPicture').selectFile('cypress/fixtures/picture/1.jpg');
    cy.get('#uploadPicture').attachFile('picture/1.jpg');

    cy.get('#currentAddress').type('New Street');

    cy.get('#state').click();
    //cy.get('#react-select-3-option-0').should('contain', 'NCR').click();
    cy.get('[id^="react-select-3-option-"]').then($els => {
      const state = Cypress.$.makeArray($els).filter($el => $el.innerText ==="NCR");
      return cy.wrap(state)
    }).click();

    cy.get('#city').click();
    //cy.get('#react-select-4-option-0').should('contain', 'Delhi').click();
    cy.get('[id^="react-select-4-option-"]').then($els => {
      const city = Cypress.$.makeArray($els).filter($el => $el.innerText ==="Delhi");
      cy.wrap(city)
    }).click();

    cy.get('#submit').click({ force: true });

    cy.contains('Thanks for submitting the form').should('be.visible');
  });

});