/// <reference types="Cypress" />

describe("Introducción a los assert  ", () =>{

    it("Demo de los Asserts ", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get("#wsf-1-field-21").should("be.visible").type("Juan")
        cy.wait(1000)
        cy.get("#wsf-1-field-22").should("be.visible").type("Perez")
        cy.wait(1000)
        cy.get("#wsf-1-field-23").should("be.visible").should("be.enabled").type("juan@gmail.com")
    })

/*
    it.only("Click", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)
        cy.get("#btnLogin").should("be.visible").click()
        cy.get('#menu_admin_viewAdminModule > :nth-child(1)').click()
        cy.get('#menu_admin_Job > .collapsible-header > .left-menu-title').should("be.visible").click()
        

    });

*/

})//Cierre de describe

   


