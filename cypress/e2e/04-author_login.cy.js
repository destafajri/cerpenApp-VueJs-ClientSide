// describe('Author Wants to Login with valid credential', ()=>{

//     beforeEach(() =>{
//         cy.visit('https://ecerpen-dev.herokuapp.com/author')
        
//     })

//     it('author redirect to login page', ()=>{

//         cy.get('#email').type('testing@gmail.com')
//         cy.get('#password').type('testing')
        
//         cy.wait(1000)
//         cy.get('#submit-login-btn-author').click({force: true})

//         cy.wait(3000)
//         cy.url().should('eq', 'https://ecerpen-dev.herokuapp.com/home')
//     })

// })