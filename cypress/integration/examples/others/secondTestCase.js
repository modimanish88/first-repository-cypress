///<reference types = 'cypress' />
describe("second test suite", function(){
    it("second test case", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input.search-keyword").type("ca")
        cy.wait(2000)
        cy.get(".products").as('productLocator')
        cy.get('@productLocator').find(".product").eq(0).contains("add to cart", {matchCase : false}).click()
        cy.get('@productLocator').find(".product").each(($e1,index,$list)=>{
            if($e1.text().includes("Capsicum")){
                cy.wrap($e1).contains("add to cart", {matchCase : false}).click()
            }
        })
        //printing logo and understanding async nature and resolving it through .then()
        cy.get('.brand').then(function(dfr){
            cy.log(dfr.text())
        })
        cy.get('a.cart-icon').click()
        cy.get('button').contains('button', 'proceed to checkout', {matchCase : false}).click()
        cy.get('button').contains('button', 'place order', {matchCase : false}).click()


    })
})