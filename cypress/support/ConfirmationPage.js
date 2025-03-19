class ConfirmationPage{
    placeOrder(){
        cy.get('#country').type('Ind')
        cy.get('.suggestions ul li a').each(($e1, index, $list)=>{
            if($e1.text().includes('India'))
                cy.wrap($e1).click()
        })
        cy.get('input[value="Purchase"]').click()
        return cy.get('.alert-success')
    }
}
export default ConfirmationPage;