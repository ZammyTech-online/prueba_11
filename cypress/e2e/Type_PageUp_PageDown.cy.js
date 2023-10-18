describe("Type PageUp PageDown", () =>{

    it("Type PageUp PageDown", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get("#wsf-1-field-21").type('{pageup}')
        cy.wait(2000)
    })

    it("Type PageDown", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get("#wsf-1-field-21").type('{pagedown}') // Corregido aquí
        cy.wait(2000)
    })

    it.only("Type ULTIMO", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get("#wsf-1-field-21").type('{pagedown}') // Corregido aquí
        cy.wait(2000)
    })
})
