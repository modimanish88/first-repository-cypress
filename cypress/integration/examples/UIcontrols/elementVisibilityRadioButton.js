/// <reference types = "cypress" />
describe("test suite", function(){
    it("test case", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.title().should('eq', 'Practice Page')

        //visible and invisible element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons
        cy.get('.radioButton').each(($e1, index, $list)=>{
            if($e1.val()==='radio3')
                cy.wrap($e1).click().should('be.checked')
        })
        
    })
})