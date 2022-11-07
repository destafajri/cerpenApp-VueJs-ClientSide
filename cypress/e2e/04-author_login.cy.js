// describe('Author Wants to Login with valid credential', ()=>{

//     beforeEach(() =>{
//         cy.visit('https://ecerpen-dev.herokuapp.com/welcome')
        
//     })

//     it('viewer click get started', ()=>{
//         cy.contains('Author').click({force: true})

//         cy.get('[data-testid="email"]').type('testing@gmail.com', {force: true})
//         cy.get('[data-testid="password"]').type('testing', {force: true})
        
//         cy.get('[data-testid="submit-login-btn-author"]').click({force: true})

//         cy.url().should('eq', 'https://ecerpen-dev.herokuapp.com/home')
//     })

// })