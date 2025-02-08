describe ('On Linkedin', () => {

    it('I can login', () => {
    cy.visit('https://linkedin.com');

    cy.get('.nav__button-secondary').click();
    cy.get('#username').type('adrianzarnescu92@yahoo.com');
    cy.get('#password').type('parola05061992');
    cy.get('.btn__primary--large').click();
    cy.get('#ember17').should('exist');


    })


}) 