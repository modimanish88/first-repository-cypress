///<reference types = 'cypress' />
describe("child tab and window", function(){
    it("child tab and window", function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //child tab
        //modifying chil tab target attribute
        cy.get('fieldset #opentab').invoke('removeAttr', 'target').click()
        cy.origin('https://www.qaclickacademy.com', ()=> {
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get('.col-lg-5 h2').should('have.text', 'Welcome to QAClick Academy ')
        })
        
    })
})