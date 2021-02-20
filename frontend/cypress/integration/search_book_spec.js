describe('user search for a book with ISBN', () => {
  it('auto-populates add_book_form', () => {
    cy.visit('http://localhost:3000')
    cy.get('form[id="book_search"]').should('exist')
    cy.get('input[name="ISBNSearch"]').type(9780099590088).should("have.value", 9780099590088)
    cy.get('form[id="book_search"]').submit()
    cy.get('input[name="title"]').should("have.value", "Sapiens")
    cy.get('input[name="author"]').should("have.value", "Yuval Noah Harari")
    cy.get('input[name="ISBN"]').type('9780099590088').should("have.value", "9780099590088")
  })
})
