///<reference types='cypress'/>


describe("intercept suite", function(){
    it("intercept test case", function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req)=>{
            req.url='https://216.10.245.166/Library/GetBook.php?AuthorName=corman'
            req.continue((res)=>{
                expect(res.body.length).to.equal(2)
            })
        }).as('ApiMockReq')
        cy.get('.btn-primary').click()
        cy.wait('@ApiMockReq').then(({request,response})=>{
            expect(response.statusCode).to.equal(200)
        })
       // cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})