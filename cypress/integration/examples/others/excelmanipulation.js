///<reference types='cypress'/>
import ExcelJs from 'exceljs';
describe("excel manipulation", function(){
    it("excel manupulation", function(){
        var index

        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html")
        cy.get('#cell-2-undefined div').each(($e1, index, $list)=>{
            if($e1.text()==='Papaya'){
                cy.wrap(index).as('fruitLocation')
                cy.wrap($e1).parent().next().next().find('div').then((dfr)=>{
                    cy.wrap(dfr.text()).as('fruitAmount')
                })
            }
        })
        cy.get('#downloadButton').click()
        cy.wait(3000)
        const filepath2 = Cypress.config('fileServerFolder') + '/cypress/downloads/download.xlsx'
        cy.task('writeToExcelFile',{filepath: filepath2, fruit1: "Papaya", fruit1newname: "papita", fruit2: "Banana", fruit2newname: "Kela", amount: 40})
        cy.get('#fileinput').click().selectFile(filepath2)
        cy.wait(3000)
        cy.get('@fruitLocation').then((dfg)=>{
            cy.get('#cell-2-undefined div').eq(dfg).then((asd)=>{
                expect(asd.text()).to.equal('papita')
            })
            cy.get('#cell-2-undefined div').eq(dfg).parent().next().next().then((fgt)=>{
                cy.get('@fruitAmount').then((ert)=>{
                    expect(Number(fgt.text())).to.equal(Number(ert)+40)
                })
            })
           
        })
    })
})


