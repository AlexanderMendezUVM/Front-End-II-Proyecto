describe('formulario', () => {
  it('uso de un formulario', () => {
    cy.visit('http://localhost:5173/')
    cy.get('div > .opcion').click();
    cy.get('[name="email"]').type('maria@gmail.com');
    cy.get('[name="password"]').type('123456');
    cy.get('span').click();
    cy.get(':nth-child(1) > .materia-item > .actividades').click();
    cy.get('.container > div > .boton').click();
    cy.get('[name="titulo"]').type('Realización de Tests');
    cy.get('[placeholder="Mensaje de la Actividad"]').type('Para la unidad III se hara la evaluación de los tests');
    cy.get('[name="objetivos"]').type('aprender a hacer test con cypress');
    cy.get('[name="participantes"]').click();
    cy.get('[name="participantes"]').click();
    cy.get('[name="participantes"]').click();
    cy.get('[name="participantes"]').click();
    cy.get('[name="ponderacion"]').type('15');
    cy.get('[placeholder="Fecha"]').type('03/08/2024');
    cy.get('[placeholder="Hora"]').type('8:00');
    cy.get('span').click();
  })
})