describe('Viewer Wants to Resgiter as Author', ()=>{

    beforeEach(() =>{
        cy.visit('https://ecerpen-dev.herokuapp.com/home')
        
    })

    it('viewer click get started', ()=>{    
        cy.wait(3000)
        cy.contains('Klik disini').click({force: true})

        cy.wait(3000)
        //assertion
        cy.contains('Register').should('exist')
    })

})