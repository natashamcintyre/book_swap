describe('user is able to request book from the bookshelf', () => {
    it('When button is pressed, it changes contact details', () => {
       
        cy.visit('http://localhost:3000/#/sign-in')
        cy.get('input[id="signin_username"]').type('testUsername')
        cy.get('input[id="signin_password"]').type('password')
        cy.get('form[id="user_signin_form"]').submit()
        cy.visit('http://localhost:3000')
        cy.get('.btn#isbnSearchButton').click()
        cy.get('input[id="ISBNSearch"]').type('9780739360385')
        cy.get('form[id="book_search"]').submit()
        cy.get('div[id="book-confirmation"]').should('contain', 'Harry Potter and the Deathly Hallows')
        cy.get('div[id="book-confirmation"]').should('contain', 'J. K. Rowling')
        cy.get('button[id="submit"]').click()
        cy.get('span[id="closeIsbnSearch"]').click()
        cy.get('div[id="books_list"]').should('contain', 'testUsername')
        cy.get('a[id="logout_link"]').click() 
        cy.visit('http://localhost:3000/#/sign-in')
        cy.get('input[id="signin_username"]').type('secondUsername')
        cy.get('input[id="signin_password"]').type('secondpassword')
        cy.get('form[id="user_signin_form"]').submit()
        cy.get('div[class="row"] button:first').click() 
        cy.get('div[class="row"] div:first').should('contain', 'secondUsername')


    }) 
}) 