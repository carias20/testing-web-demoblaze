
Cypress.Commands.add('accesoCategoriaPhone', () => {
    cy.get('#itemc').should('be.visible');
    cy.get('#itemc').should('have.text', 'Phones');
    cy.get('#itemc').click();
    cy.get('.card').should('have.length.greaterThan', 0);
});
Cypress.Commands.add('SeleccionPhone', () => {
    cy.get('a[href="prod.html?idp_=1"]').first().click();
    cy.url().should('include', 'prod.html?idp_=1');
    cy.get('strong').should('contain', 'Product description');
});
Cypress.Commands.add('AgregarProducto', () => {
    cy.get('a.btn.btn-success.btn-lg')
        .should('be.visible')
        .and('contain', 'Add to cart');
    cy.get('a.btn.btn-success.btn-lg').click();
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Product added');
    });
    cy.get('.btn.btn-success.btn-lg').click();
});
Cypress.Commands.add('verificarOrden', () => {
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get('td').should('have.length.greaterThan', 0);
    cy.get('td').contains('Samsung galaxy s6').should('exist');
});
Cypress.Commands.add('EliminarProducto', () => {
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get('td').should('have.length.greaterThan', 0);
    cy.get('td').contains('Samsung galaxy s6').should('exist');
});
Cypress.Commands.add('SalirAplicacion', () => {
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get('#logout2').click();
    cy.get('#signin2')
        .should('be.visible')
        .and('have.text', 'Sign up');
});

