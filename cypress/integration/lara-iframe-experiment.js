context('iframe experiments', ()=>{
            // Activity data
            const activityName = "Driving for Gas (assessment version)"

            // First grab iFrame
            const interactiveContent = ".pageContent"
            const interactiveTextArea = "textarea"
        
            // Submit something with larger output (graph)
            const testSubmission = "plot(1:100)"
        
            // Buttons expected for tutorial mode
            const runCodeButton = ".btn-success"
            const startOverButton = ".btn-tutorial-solution"
    before(()=> {
        cy.visit('https://authoring.staging.concord.org/activities/20228/pages/305804/')
    })
    describe('find the iframe', ()=>{
        it('will find an element in the iframe', ()=>{
            // cy.getIframe().find('#username').type('user1');
            // cy.getIframe().find('#password').type('user1{enter}')
            cy.wait(2000)
            cy.getIframe().find('.tutorialTitle')
            cy.getIframe().find(interactiveContent).find(startOverButton).should('be.visible')
            cy.getIframe().find(startOverButton).should('exist').and('be.visible')
            cy.getIframe().find(runCodeButton).should('exist').and('be.visible')
            cy.getIframe().find(interactiveContent)
            cy.get('page-content').scrollIntoView({ duration: 2000 })
            
    
            cy.getIframe().find(interactiveTextArea).clear({ force: true })
            cy.getIframe().find(interactiveTextArea).type(testSubmission, { force: true })
            cy.getIframe().find(interactiveTextArea).type("{enter}", { force: true })
    
            //run code
            cy.getIframe().find(runCodeButton).should("be.visible").click({ force: true })
    
    
            return null
        })
    })
})
