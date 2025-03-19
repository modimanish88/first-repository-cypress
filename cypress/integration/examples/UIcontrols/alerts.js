///<reference types = 'cypress' />
describe("second test suite", function(){
    it("second test case", function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //verifying alerts and cofirm box text
        cy.on('window:alert', (str)=>{
            expect(str).be.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>{
            expect(str).be.equal('Hello , Are you sure you want to confirm?')
        })
    })
})