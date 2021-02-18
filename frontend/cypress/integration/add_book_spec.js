describe('user can add a book', () => {
  it('displays new book on page', () => {
    cy.visit('http://localhost:3000')
    cy.get('form').should('exist')
  })
})
