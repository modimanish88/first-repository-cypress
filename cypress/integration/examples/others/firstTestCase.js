/// <reference types='cypress'/>

describe("first test suite", function(){
    it("first test case", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/").title().should('include', "GreenKart")

        cy.get(".search-keyword").type("ab")
        cy.get(".search-keyword").clear()
        cy.get(".search-keyword").type("be")
        cy.get("div div[class='product']").should('have.length', 5)
        cy.get("div div[class='product']").each(($e1, index, $list)=>{
            cy.wrap($e1).find(".product-name").then(()=>{
                if($e1.text().includes("Raspberry") || $e1.text().includes("Strawberry"))
                    cy.wrap($e1).contains("ADD TO CART").click()
            })
        })

    })
})
