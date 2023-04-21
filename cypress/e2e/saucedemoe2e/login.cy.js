/// <reference types="Cypress" />
import Login from "../saucedemo_pom/login";


describe('Login',()=>{
 const login = new Login();
 let loginData;

 /*
  * loads data from a fixture file into a variable(data) 
  * before running any tests in the test suite. 
  * This way, you can use this variable in any of your test cases 
  * without having to load it again.
  */
 before(function(){
    cy.fixture('login').then((data)=>{
        loginData = data;

    })

 })

 
 it('Verify that you can log in successfully', ()=>{

   // cy.session(loginData.username,()=>{

   //    cy.visit(Cypress.env('BaseUrl'));
   //    login.setUsernameAndPassword(loginData.username, loginData.password  );
   //    login.clickLoginBtn();




   // })

   cy.visit(Cypress.env('BaseUrl'));
   login.setUsernameAndPassword(loginData.username, loginData.password  );
   login.clickLoginBtn();


 })


});

