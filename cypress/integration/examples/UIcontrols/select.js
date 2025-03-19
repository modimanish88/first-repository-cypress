
///<reference types = 'cypress' />
describe("select suite", function(){
    it("select case", function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //select an option by index and assert
        cy.get('select#dropdown-class-example').select(1).should('have.value', 'option1')
        //select an option by value and assert
        cy.get('select#dropdown-class-example').select('option2').should('have.value', 'option2')
        //select an option by text and assert
        cy.get('select#dropdown-class-example').select('Option3').should('have.value', 'option3')
        
    })
})