///<reference types='cypress'/>

import ProductPage from "../../../support/ProductPage"

describe("e2e suite", function(){

    beforeEach(function(){
        cy.log("Inside beforeEach hook")
        cy.fixture('example').then((data)=>{
            this.data=data
        })
    })

    it("e2e case", function(){
        const productPage = new ProductPage()
        Cypress.config('defaultCommandTimeout', 6000)
        //const phone = this.data.phone
        //const phone2 = "Blackberry"
        cy.navigateToPage(Cypress.env('url')+'/angularpractice/shop')
        productPage.addProducts(this.data.phone)
        const cartPage = productPage.goToCartPage()
        cartPage.cartValue().should('be.lessThan',300000)
        const confirmationpage = cartPage.checkout()
        confirmationpage.placeOrder().then(function(dfr){
            if (dfr.text().includes('Success'))
                cy.log("order placed") 
            else
                cy.log("order failed")
        })
    })
})