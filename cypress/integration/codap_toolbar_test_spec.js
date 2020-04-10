context('CODAP Toolbar buttons', ()=>{
    before(()=> {
        cy.visit('https://codap-server.concord.org/releases/staging/?di=https://codap-shared-table-plugin.concord.org/branch/master/')
    })
    describe('will click on all the buttons in the toolshelf', ()=>{
        it('will create a new doc', ()=>{
            cy.get('button').contains('Create New Document').click();
        })
        it('will open a new table', ()=>{
            cy.get('.dg-table-button').click();
            // cy.get('.sc-menu .sc-menu-scroll-view .sc-container-view .sc-menu-item .menu-item span').parent().parent().parent().parent().parent().parent()
            //     .invoke('attr', 'class', 'focus')
            //     .click({force:true});
            cy.get('.sc-menu .sc-menu-scroll-view .sc-container-view .sc-menu-item .menu-item span')
                .trigger('mousedown', {which:1, button:0});
                // .trigger('mouseup', {which:1, button:0})
            cy.get('.dg-case-table-view').should('be.visible')
        });
        it('will open a new graph', ()=>{
            cy.type('{ctrl}{alt}g')
            cy.get('.dg-graph-view').should('be.visible')
        })
    })
})