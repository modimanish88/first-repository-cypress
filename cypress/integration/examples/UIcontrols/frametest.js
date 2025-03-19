///<reference types = 'cypress' />
///<reference types = 'cypress-iframe' />
import 'cypress-iframe'
describe("frame suite", function(){
    it("frame case", function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('.nav-outer li:nth-child(5) a').click()
        cy.wait(3000)
        cy.iframe().find("h1[class*='pricing-title']").as('awe')
        cy.get('@awe').should('have.length', 2)
        })
    })