import * as ui from '../support/ui/loginUI.js'

describe("E2E productos", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("/index.html");
    });
    it("CA01 creación cuenta", () => {
        cy.fixture('login/crearUsuarioRequest.json').then((usuario) => {
            let datosCuenta = usuario
            cy.login(datosCuenta)
        })
    })
    it("CA02 Ingreso a la cuenta usuario registrado", () => {
        cy.fixture('login/crearUsuarioRequest.json').then((usuario) => {
            let datosCuenta = usuario
            cy.IngresoCuenta(datosCuenta)
        })

    })
    it("CA03 verificación nombre usuario logiado", () => {
        cy.fixture('login/crearUsuarioRequest.json').then((usuario) => {
            let datosCuenta = usuario
            cy.IngresoCuenta(datosCuenta)
            cy.VerificacionCuenta()

        })
    })
    it("CA04  ingreso categoria Phone", () => {
        cy.fixture('login/crearUsuarioRequest.json').then((usuario) => {
            let datosCuenta = usuario
            cy.IngresoCuenta(datosCuenta)
            cy.wait(2000);
            cy.accesoCategoriaPhone();
        })
    })
    it("CA05  Seleccionar Phone del listado", () => {
        cy.fixture('login/crearUsuarioRequest.json').then((usuario) => {
            let datosCuenta = usuario
            cy.IngresoCuenta(datosCuenta)
            cy.wait(2000);
            cy.accesoCategoriaPhone();
            cy.SeleccionPhone();
        })
    })
    it("CA06  Agregar Phone al carrito", () => {
        cy.fixture('login/crearUsuarioRequest.json').then((usuario) => {
            let datosCuenta = usuario
            cy.IngresoCuenta(datosCuenta)
            cy.wait(2000);
            cy.accesoCategoriaPhone();
            cy.SeleccionPhone();
            cy.AgregarProducto();
        })

    })
    it("CA07  verificar orden carrito compra", () => {
        cy.fixture('login/crearUsuarioRequest.json').then((usuario) => {
            let datosCuenta = usuario
            cy.IngresoCuenta(datosCuenta)
            cy.wait(2000);
            cy.accesoCategoriaPhone();
            cy.SeleccionPhone();
            cy.AgregarProducto();
            cy.verificarOrden();
        })
    })
    it("CA08  Eliminar orden carrito compra", () => {
        cy.fixture('login/crearUsuarioRequest.json').then((usuario) => {
            let datosCuenta = usuario
            cy.IngresoCuenta(datosCuenta)
            cy.wait(2000);
            cy.accesoCategoriaPhone();
            cy.SeleccionPhone();
            cy.AgregarProducto();
            cy.verificarOrden();
            cy.EliminarProducto();
        })

    })
    it("CA09  salir de la aplicación", () => {
        cy.fixture('login/crearUsuarioRequest.json').then((usuario) => {
            let datosCuenta = usuario
            cy.IngresoCuenta(datosCuenta)
            cy.wait(2000);
            cy.SalirAplicacion()
        })
    })

})
