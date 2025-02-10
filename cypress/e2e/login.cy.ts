import { Swaglogin } from "../pages/testlogin";
const Swaglogin_page = new Swaglogin();

describe('Login Test of Sauce Labs', () => {
  it('login with methods', () => {

    Swaglogin_page.visitURL()
      .step_enterUsername('standard_user')
      .step_enterPassword('secret_sauce')
      .step_clicklogin()
      .stepAssertLogin()
  })

  /*  it('Logs in with valid credentials', () => {
      cy.visit('https://www.saucedemo.com/v1/'); 
    

      cy.get('input[data-test="username"]').type('standard_user'); 
      cy.get('input[data-test="password"]').type('secret_sauce'); 
  
      cy.get('#login-button').click(); 
  
      // Assert successful login by checking URL or an element on the dashboard
      cy.url().should('include', '/inventory.html'); 
      cy.get('.app_logo').should('be.visible');
      cy.contains('Sauce Labs Backpack').should('be.visible');
    });
    
// Invalid login test
it('Fails to log in with incorrect credentials', () => {
    cy.visit('https://www.saucedemo.com/v1/'); 

    cy.get('input[data-test="username"]').type('standard_user'); 
    cy.get('input[data-test="password"]').type('wrong_password'); 

    cy.get('#login-button').click(); 

    // Assert error message is visible
    cy.get('path[fill="currentColor"]').should('be.visible')
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
  }); */



});
