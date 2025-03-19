///<reference types = 'cypress' />
describe("select suite", function(){
    it("select case", function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //print all the courses that have price as 25
        cy.get('[name="courses"] td:nth-child(3)').each(($e1, index, $list)=>{
            if($e1.text()==='25'){
                cy.get('table[name="courses"] td:nth-child(3)').eq(index).next().then((dfr)=>{
                    cy.log(dfr.text())
                })
            }
        })
    })
})