describe('Viewer Wants to Read Cerpen', ()=>{

    beforeEach(() =>{
        cy.visit('https://ecerpen-dev.herokuapp.com/')
        
    })

    it('viewer click get started', ()=>{    
        cy.contains('Get Started').click({force: true})

        cy.wait(5000)
        cy.contains('Viewer').click({force: true})

        //assertion
        cy.contains('Home').should('exist')
    })

})