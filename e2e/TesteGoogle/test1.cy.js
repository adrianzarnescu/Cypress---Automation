describe ('Suita 1', () => {

  //Testul Numarul 1
  it("test 1", () => {
    cy.visit("https://google.com");
    cy.get('#L2AGLb').click();
    cy.get('.gLFyf').type('vlog de it').type('{enter}'); 


    cy.get('#result-status').should('exist');
  })

})