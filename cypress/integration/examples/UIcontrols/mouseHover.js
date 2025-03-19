///<reference types = 'cypress' />
describe("select suite", function(){
    it("select case", function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('.mouse-hover-content').invoke('show')
        //cy.get('[href*="top"]').click()
        //cy.url().should('contain','top')

        //cy.get('.mouse-hover').contains('Reload').click()
        //using force = true
        cy.get('[href*="top"]').click({force : true})

    })
})