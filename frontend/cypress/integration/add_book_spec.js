describe('user can add a book', () => {
  it('displays new book on page', () => {
    cy.visit('http://localhost:3000')
    cy.get('form').should('exist')
    cy.get('input[name="title"]').type('Harry Potter').should("have.value", "Harry Potter")
    cy.get('input[name="author"]').type('J.K. Rowling').should("have.value", "J.K. Rowling")
    cy.get('input[name="ISBN"]').type('12345').should("have.value", "12345")
    cy.get('input[name="phone_number"]').type('08546374586').should("have.value", "08546374586")
    cy.get('input[name="postcode"]').type('ABC123').should("have.value", "ABC123")
    cy.get('form').submit()
    cy.get('li[className="book"]').should('exist')
  })
})