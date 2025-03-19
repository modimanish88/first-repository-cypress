import CartPage from "./CartPage"

class ProductPage{

    addProducts(phone){
        cy.get('.card').each(($e1, index, $list)=>{
            cy.wrap($e1).find('h4 a').then((dfr)=>{
                if(phone.includes(dfr.text()))
                    cy.wrap($e1).contains('button', 'Add ').click()
            })
        })
        cy.get('.card').filter(`:contains('${phone[2]}')`).contains('button', 'Add ').click()
       
    }

    goToCartPage(){
        cy.get('#navbarResponsive a').click()
        return new CartPage()
    }
}
export default ProductPage;