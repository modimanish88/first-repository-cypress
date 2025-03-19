//<reference types='cypress'/>


describe("API POST suite", function(){
    it("API POST test case", function(){
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',{

            "name":"Theory of Computation",
            "isbn":"TOC1",
            "aisle":"8690",
            "author":"Modi"
            }).then(function(resp){
                expect(resp.status).equals(200)
            })
    })
})