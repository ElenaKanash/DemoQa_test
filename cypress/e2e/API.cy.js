/// <reference types="cypress" />

describe('API testing', () => {
  let token, expire  
  
  it('Authorized', () => {
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

it('GenerateToken', () => {
  cy.request({
    method: 'POST',
    url: 'https://demoqa.com/Account/v1/GenerateToken',
    body: {
      "userName": "Elena",
      "password": "!Qwerty987+654"
    }
  }).then((response) => {
    expect(response.status).to.be.equal(200);
    console.log(response);
    token = response.body.token;
    expire = response.body.expire;
    console.log(token)     
    console.log(expire) 
  })
});


});

