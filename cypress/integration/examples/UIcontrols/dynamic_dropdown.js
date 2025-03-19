///<reference types = 'cypress' />
describe("select suite", function(){
    it("select case", function(){
        var count = 0;
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('in')
        cy.get('.ui-menu-item div').each(($e1, index, $list)=>{
            //printing each value in dropdown
            cy.log($e1.text())
            count++
        }).then(()=>{
            //counting the total no of elements
            cy.log(count)
        })
        cy.get('#autocomplete').clear()
        cy.get('#autocomplete').type('in')
        cy.get('.ui-menu-item div').each(($e1, index, $list)=>{
            if($e1.text()==="India")
                cy.wrap($e1).click()
        })
    })
})