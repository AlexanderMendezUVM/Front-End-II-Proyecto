describe('busqueda fallida', () => {
  it('rol equivocado', () => {
    cy.visit('http://localhost:5173/')
    cy.get('div > .opcion').click();
    cy.get('[name="email"]').type('jose@gmail.com');
    cy.get('[name="password"]').type('123456');
    cy.get('span').click();
    cy.get('.rol').click();
    cy.get('.rol').should('have.text', 'Usted ha iniciado como: ESTUDIANTE');
  })
})