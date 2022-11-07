describe('Author Wants to Login with valid credential', ()=>{

    beforeEach(() =>{
        cy.visit('http://127.0.0.1:5173/author')
        
    })

    it('author redirect to login page', ()=>{
        // cy.wait(1000)
        // cy.get('input[type=Email]').type("testing@gmail.com", {force: true})

        // cy.wait(1000)
        // cy.get('input[type=Password]').type("testing", {force: true})

        cy.get('#email').type('testing@gmail.com')
        cy.get('#password').type('testing')
        
        cy.wait(1000)
        cy.contains('Masuk').click({force: true})

        cy.wait(3000)
        cy.url().should('eq', 'https://ecerpen-dev.herokuapp.com/home')
    })

})