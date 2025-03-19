///<reference types='cypress'/>
describe("intercept suite", function () {
    it("intercept test case", function () {
       cy.loginAPI().then(()=>{
        cy.visit('https://rahulshettyacademy.com/client/',{
            onBeforeLoad: function(window){
                window.localStorage.setItem('token', Cypress.env('token'))
            }
           })
       })
       
    })
})