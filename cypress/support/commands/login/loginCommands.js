import * as ui from '../../ui/loginUI.js'

Cypress.Commands.add('login', (datosLogin) => {
  cy.realizarClic(ui.SELECT_BOTON_REGISTRO);
  cy.realizarClic(ui.SELECTOR_USUARIO);
  cy.escribir(datosLogin.usuario, ui.SELECTOR_USUARIO);
  cy.realizarClic(ui.SELECTOR_CLAVE);
  cy.escribir(datosLogin.clave, ui.SELECTOR_CLAVE);
  cy.realizarClic(ui.SELECTOR_BOTON_SINGUP);
});

Cypress.Commands.add('IngresoCuenta', (datosLogin) => {
  cy.realizarClic(ui.SELECTOR_lOGIN);
  cy.realizarClic(ui.SELECTOR_USUARIO_lOGIN);
  cy.escribir(datosLogin.usuario, ui.SELECTOR_USUARIO_lOGIN);
  cy.realizarClic(ui.SELECTOR_CLAVE_lOGIN);
  cy.escribir(datosLogin.clave, ui.SELECTOR_CLAVE_lOGIN);
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true });

});
Cypress.Commands.add('VerificacionCuenta', (datosLogin) => {
            cy.get(ui.TXT_USUARIO_LOGEADO).debug();
            cy.get(ui.TXT_USUARIO_LOGEADO)
              .should('not.have.css', 'display', 'none')
              .should('be.visible')
              .should('contain', "Welcome milley");
});


