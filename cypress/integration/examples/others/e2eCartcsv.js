///<reference types='cypress'/>
import neatCSV from 'neat-csv';
describe("intercept suite", function () {
    it("intercept test case", function () {
        var productName, orderNumber;
        //login to app through JWT
        cy.loginAPI().then(() => {
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })

        //add product
        cy.get('.col-lg-4:last-child').then(function (dfr) {
            productName = dfr.find('b').text()
            cy.wrap(productName).as('pn')
            cy.wrap(dfr).find('button:last-of-type').click()
        })

        //goto cart
        cy.get('[routerlink*="cart"]').click()

        //checkout
        cy.get('.subtotal button').click()

        //
        cy.get('.form-group input').type('in')
        cy.get('.ta-item').each(($e1, index, $list) => {
            if ($e1.text() === " India") {
                cy.wrap($e1).click()
            }

        })

        //place order
        cy.get('.action__submit').click()

        cy.get('#htmlData tr:nth-child(4) h1').should('contain.text', 'Thankyou for the order')
        cy.get('#htmlData tr:nth-child(4) label.ng-star-inserted').then((dfr) => {
            orderNumber = dfr.text().split(' ')[2].trim()
            cy.wrap(orderNumber).as('on')

        })
        cy.get('#htmlData tr:nth-child(6) tr:nth-child(4) button').click()
        Cypress.config('defaultCommandTimeout', 6000)

        cy.log()
        cy.readFile(Cypress.config('fileServerFolder') + '/cypress/downloads/order-invoice_modi.manish88.csv').then((sde) => {
            const data = neatCSV(sde)
            cy.wrap(data).as('fg')
        })
        //asertions
        cy.get('@fg').then((asd) => {
            cy.get('@pn').then(function(fgt) {
                expect(fgt).to.be.equal(asd[0]["Product Name"])
            })
            cy.get('@on').then((ght)=>{
                expect(ght).to.be.equal(asd[0]["Invoice Number"])
            })
        })
    })
})