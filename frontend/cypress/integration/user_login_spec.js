describe('signed up user can log in', () => {
  it('starts new session', () => {
    cy.visit('http://localhost:3000/#/sign-in')
    cy.get('form[id="signInForm"]').should('exist')
    cy.get('input[id="signin_username"]').type('testUsername').should('have.value', 'testUsername')
    cy.get('input[id="signin_password"]').type('password')
    cy.get('form[id="signInForm"]').submit()
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/#/')
    })
    cy.get('form[id=book_search]').should('exist')
  })
})
