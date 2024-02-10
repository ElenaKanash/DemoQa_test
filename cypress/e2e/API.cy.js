/// <reference types="cypress" />

describe('API testing', () => {
  let token, expires;
  let userName = 'Elena';
  let userPassword = '!Qwerty987+654';

  it('Authorized', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/Authorized',
      headers: {},
      body: {
        "userName": userName,
        "password": userPassword,
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
        "userName": userName,
        "password": userPassword,
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      console.log(response);
      token = response.body.token;
      expires = response.body.expires;
      console.log({ token, expires });
    })
  });

  it('Login to DemoQA', () => {
    cy.setCookie('userName', userName);
    cy.setCookie('token', token);
    cy.setCookie('expires', expires);
    cy.visit('https://demoqa.com/books');
    cy.get('#userName-value').should('contain', userName)
  });

});

