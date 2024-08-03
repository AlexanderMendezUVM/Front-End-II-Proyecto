describe('ventana modal', () => {
  it('abrir y cerrar ventana modal', () => {
    cy.visit('http://localhost:5173/')
    cy.get('div > .opcion').click();
    cy.get('[name="email"]').type('jose@gmail.com');
    cy.get('[name="password"]').type('123456');
    cy.get('.formulario > .boton').click();
    cy.get('.botones > :nth-child(2)').click();
    cy.get('.container > div > .boton').click();
    cy.get('.cerrar').click();
  })
})