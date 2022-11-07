describe('Author Wants to Login with valid credential', ()=>{

    beforeEach(() =>{
        cy.visit('https://ecerpen-dev.herokuapp.com/welcome')
        
    })

    it('author redirect to login page', ()=>{
        cy.contains('Author').click({force: true})

        cy.wait(3000)
        cy.get('[data-testid="email"]').type('testing@gmail.com', {force: true})

        cy.wait(3000)
        cy.get('[data-testid="password"]').type('testing', {force: true})
        
        cy.wait(3000)
        cy.get('[data-testid="submit-login-btn-author"]').click({force: true})

        cy.wait(5000)
        cy.url().should('eq', 'https://ecerpen-dev.herokuapp.com/home')
    })

})