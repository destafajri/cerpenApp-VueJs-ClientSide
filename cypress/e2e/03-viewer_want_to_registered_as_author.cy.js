describe('Viewer Wants to Resgiter as Author', ()=>{

    beforeEach(() =>{
        cy.visit('https://ecerpen-dev.herokuapp.com/home')
        
    })

    it('viewer click register', ()=>{    
        cy.wait(1000)
        cy.contains('Klik disini').click({force: true})

        cy.wait(1000)
        //assertion
        cy.contains('Register').should('exist')
    })

})