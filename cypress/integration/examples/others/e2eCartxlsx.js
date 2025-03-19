///<reference types='cypress'/>
import excelToJson from "convert-excel-to-json";
import fs from "fs";
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
        cy.get('#htmlData tr:nth-child(6) tr:nth-child(5) button').click()
        Cypress.config('defaultCommandTimeout', 6000)
        const filePath = cy.config('fileServerFolder') + '/cypress/downloads/order-invoice_modi.manish88.xlsx'
        cy.task('excelToJsonConvertor', filePath).then((result)=>{
            cy.wrap(result).as('sd')
            console.log(result)
        })
        //asertions
         cy.get('@sd').then((asd) => {
            cy.get('@pn').then(function(fgt) {
                expect(fgt).to.be.equal(asd.data[1].B)
            })
            cy.get('@on').then((ght)=>{
                expect(ght).to.be.equal(asd.data[1].A)
            })
        })
    })
})