// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('navigateToPage',(URL)=>{
    cy.visit(URL)
})
Cypress.Commands.add('loginAPI', ()=>{
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login',
        {userEmail:"modi.manish88@gmail.com",userPassword:"11THaug@1987"}).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.message).equals("Login Successfully")
            Cypress.env('token', response.body.token)
       })
})