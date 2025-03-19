//<reference types='cypress'/>


describe("calendar", function(){
    it("Calendar test case", function(){
        const mnth = "6"
        const dy = "15"
        const yr = "2028"
        var mon
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        cy.get('[href*="offers"]').invoke('removeAttr','target').click()
        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label span' ).invoke('text').then((yearLimit)=>{
            cy.log(yearLimit.length)
            var limit = yearLimit.split(' ')         
            cy.log(limit[0])
            if(yr >= limit[0] && yr <= limit[2]){
                cy.get('.react-calendar__decade-view__years button').each(($e1, index, $list)=>{
                    if($e1.text() === yr)
                        cy.wrap($e1).click()
                }).then(()=>{
                    cy.get('.react-calendar__year-view__months button').eq(Number(mnth) -1).then((drf)=>{
                        cy.get('.react-calendar__year-view__months button').eq(Number(mnth) -1).click()
                        cy.get('abbr[aria-label*=' +drf.text() +']').eq(Number(dy)-1).click()
                    })
                })
            }
            else if(yr < limit[0])
                cy.get('.react-calendar__navigation__label').prev().click()
            else
            cy.get('.react-calendar__navigation__label').next().click()
        })
        cy.get('.react-date-picker__inputGroup__input').each(($e1, index, $list)=>{
            if($e1.prop('name') === 'month')
                cy.wrap($e1).should('have.value', mnth)
            else if($e1.prop('name') === 'day')
                cy.wrap($e1).should('have.value', dy)
            else
                cy.wrap($e1).should('have.value', yr)
        })
    })
})