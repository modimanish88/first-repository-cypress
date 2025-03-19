///<reference types = 'cypress' />
describe("second test suite", function(){
    it("second test case", function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //check 2 chdckboxes based on values.
        cy.get("input[type='checkbox']").check(['option1', 'option2']).should('be.checked')

        //uncheck option1 wihtout uniquely getting identified
        cy.get("input[type='checkbox']").uncheck('option1').should('not.be.checked')

        //check by uniquely identifying
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value', 'option3')
    })
})