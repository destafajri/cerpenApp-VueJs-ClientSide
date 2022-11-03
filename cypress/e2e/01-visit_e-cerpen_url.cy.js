describe('Cy Visit', () => {
  it('Visits e-cerpen web', () => {
    cy.visit('https://ecerpen-dev.herokuapp.com/')

    //assertion
    cy.contains('E-Cerpen').should('exist')

  })
})