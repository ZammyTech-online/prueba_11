
describe("seccion 1 validando el titulo", () =>{

    it("Test validar el titulo", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq','Datos Personales | TestingQaRvn')

        cy.log("ok la funcion title funciono bien")
    })

  
})

   


