/// <reference types="cypress" />

import userData from "../fixtures/userData.json";

describe('Web Tables', () => {

  beforeEach(() => {
    cy.visit('/webtables');
  });

  it('add new user data to the table', () => {
    const testData = [userData.firstName, userData.lastName, userData.userAge, userData.userEmail, userData.userSalary, userData.userDepartment]
      .map(el => el.toString());

    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type(userData.firstName).should('have.value', userData.firstName);
    cy.get('#lastName').type(userData.lastName).should('have.value', userData.lastName);
    cy.get('#userEmail').type(userData.userEmail).should('have.value', userData.userEmail);
    cy.get('#age').type(userData.userAge).should('have.value', userData.userAge);
    cy.get('#salary').type(userData.userSalary).should('have.value', userData.userSalary);
    cy.get('#department').type(userData.userDepartment).should('have.value', userData.userDepartment);

    cy.get("#submit").click();

    cy.get("#searchBox").type(userData.firstName);
    cy.get('.rt-tbody .rt-tr:not(.-padRow)').should('have.length', 1); //check the row is filled (not empty)
    // check user data in all cells of a row
    cy.get('.rt-tbody .rt-tr:not(.-padRow) .rt-td').then($els => {
      const rowData = Cypress.$.makeArray($els).map($el => $el.innerText).slice(0, -1);
      console.log(rowData)
      console.log(testData)
      expect(rowData).to.be.deep.equal(testData);

      //delete user data
      cy.get('#delete-record-4').click();
      cy.get('.rt-tbody .rt-tr:not(.-padRow)').should('not.exist');
    });
  });


});

