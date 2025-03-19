//<reference types='cypress'/>


describe("API POST suite", function(){
    it("API POST test case", function(){
        cy.request('GET', 'https://216.10.245.166/Library/GetBook.php?AuthorName=corman').then(function(resp){
                cy.log(resp.body.length)
                expect(resp.status).equals(200)
                expect(resp.body[0]).to.have.property('book_name', 'Discrete mathematics')
                expect(resp.body[0]).to.have.property('isbn', 'GHY')
                expect(resp.body[0]).property('aisle').equals('888')
                cy.log(resp.duration)
            })
    })
})