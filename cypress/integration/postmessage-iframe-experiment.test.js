const url = "https://codap.concord.org/~eireland/iframe-test-pages/"
context('experiment to see how cypress works with postmessages',()=>{
    it('visit test page',()=>{
        cy.visit(url);
    })
    it('verify message sent to iframe',()=>{
        let msg = 'hello from parent frame in cypress!{enter}'
        cy.get('#my-message').type(msg)
        cy.getIframe().find('#received-message').should('contain', msg.split('{')[0])
    })
    it('verify count get incremented to verify got message back',()=>{
        cy.get('#return-message').should('contain','#2')
    })
    it('verify can keep sending message to iframe and get message back',()=>{
        let msg = 'Going to nag you!{enter}'
        cy.get('#my-message').clear()
        cy.get('#my-message').type(msg)
        cy.getIframe().find('#received-message').should('contain', msg.split('{')[0])
        cy.get('#return-message').should('contain','#3')
    })
})