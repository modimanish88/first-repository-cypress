import ConfirmationPage from "./ConfirmationPage"

class CartPage{
    cartValue(){
        let amount,sum = 0
        return cy.get('td:nth-child(4) strong').each(($e1, index, $list)=>{
            amount = Number($e1.text().split(' ')[1].trim())
            sum += amount
        }).then(()=>{
            return sum
        })
    }

    checkout(){
        cy.get('button').contains('Checkout').click()
        return new ConfirmationPage()
    }
}
export default CartPage;