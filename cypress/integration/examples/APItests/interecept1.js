///<reference types='cypress'/>
describe("intercept suite", function(){
    it("intercept test case", function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode: 200,
            body: [
                {
                    "book_name": "Data Structures and Alogorithms",
                    "isbn": "HYU",
                    "aisle": "890",
                    "author": "Corman"
                }
            ]
        }).as('ApiMockResp')
        cy.get('.btn-primary').click()
        cy.wait('@ApiMockResp').then(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})