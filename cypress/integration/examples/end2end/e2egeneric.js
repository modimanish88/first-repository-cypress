///<reference types='cypress'/>
describe("e2e suite", function(){
    before(function(){
        cy.log("Inside before hook")
    })
    beforeEach(function(){
        cy.log("Inside beforeEach hook")
        cy.fixture('example').then((data)=>{
            this.data=data
        })
    })
    afterEach(()=>{
        cy.log("Inside afterEach hook")
    })
    after(()=>{
        cy.log("Inside after hook")
    })
    it("e2e case", function(){
        Cypress.config('defaultCommandTimeout', 6000)
        //const phone = this.data.phone
        //const phone2 = "Blackberry"
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        cy.get('.card').each(($e1, index, $list)=>{
            cy.wrap($e1).find('h4 a').then((dfr)=>{
                if(this.data.phone.includes(dfr.text()))
                    cy.wrap($e1).contains('button', 'Add ').click()
            })
        })
        cy.get('.card').filter(`:contains('${this.data.phone[2]}')`).contains('button', 'Add ').click()
        cy.get('#navbarResponsive a').click()
        let amount,sum = 0
        cy.get('td:nth-child(4) strong').each(($e1, index, $list)=>{
            amount = Number($e1.text().split(' ')[1].trim())
            sum += amount
        }).then(()=>{
            expect(sum).is.lessThan(300000)
        })
        cy.get('button').contains('Checkout').click()
        cy.get('#country').type('Ind')
        cy.get('.suggestions ul li a').each(($e1, index, $list)=>{
            if($e1.text().includes('India'))
                cy.wrap($e1).click()
        })
        cy.get('input[value="Purchase"]').click()
        cy.get('.alert-success').should('contain.text','Success')
    })
})