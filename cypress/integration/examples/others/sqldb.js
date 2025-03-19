//<reference types='cypress'/>


describe("intercept suite", function(){
    it("intercept test case", function(){
        cy.sqlServer("select * from student").then(function(result){
            cy.log(result[0][0])
            cy.log(result[1][0])
            cy.log(result[2][0])
        })
    })
})