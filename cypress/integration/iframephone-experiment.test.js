// const url = "https://codap.concord.org/~eireland/iframephone-test-pages/"
const url = "http://localhost:5000/test-pages/iframephone-test-pages/"

context('experiment to see how cypress works with iframephone',()=>{
    it('visit test page',()=>{
        cy.visit(url);
    })
    it('verify message sent to iframe',()=>{
        let msg = 'hello from parent frame in cypress!{enter}'
        cy.get('#my-message').clear()
        cy.debug()
        cy.get('#my-message').type(msg)
        cy.getIframe().find('#received-message').should('contain', msg.split('{')[0])
    })
    it('verify count get incremented to verify got message back',()=>{
        cy.get('#return-message').should('contain','#1')
    })
    it('verify can keep sending message to iframe and get message back',()=>{
        let msg = 'Going to nag you!{enter}'
        cy.get('#my-message').clear()
        cy.get('#my-message').type(msg)
        cy.wait(1000)
        cy.getIframe().find('#received-message').should('contain', msg.split('{')[0])
        cy.get('#return-message').should('contain','#2')
    })
})