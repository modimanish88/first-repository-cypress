///<reference types = 'cypress' />
describe("select suite", function(){
    it("select case", function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(asd){
            const url = asd.prop('href')
            cy.visit(url)
            cy.origin(url, ()=> {
                cy.get('#navbarSupportedContent a[href*="contact"]').click()
                cy.get('.footer-address li:nth-child(2) p').then((axs)=>{
                    const email = axs.text()
                    cy.log(email)
                })
            })
        })

    })
})