/// <reference types="cypress" />

describe('API testing', () => {
  
  it('Login', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/Authorized',
      headers: {},
      body: {
        "userName": "Elena",
        "password": "!Qwerty987+654"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      console.log(response)      
    })
  });
});

