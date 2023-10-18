/// <reference types="Cypress" />



require('cypress-plugin-tab')

describe("Ejemplo funcion Tab  ", () =>{

    it("Type con Tab ", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get("#wsf-1-field-21").type("zammy").tab().type("cristo").tab().type("zammy@gmail.com")
    })

    


  



})//Cierre de describe