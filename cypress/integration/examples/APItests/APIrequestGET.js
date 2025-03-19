//<reference types='cypress'/>


describe("API POST suite", function(){
    it("API POST test case", function(){
        cy.request('GET', 'http://216.10.245.166/Library/GetBook.php?ID=TOC18690').then(function(resp){
                expect(resp.status).equals(200)
                expect(resp.body[0]).to.have.property('book_name', 'Theory of Computation')
                expect(resp.body[0]).to.have.property('author', 'Modi')
                expect(resp.body[0]).property('aisle').equals('8690')
                cy.log(resp.duration)
            })
    })
})