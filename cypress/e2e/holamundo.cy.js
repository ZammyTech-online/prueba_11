describe('primer Test con Cypress', () =>{
    it("Esto es un hola mundo desde Cypress", () => {
        cy.log("Bienvenido a Cypress");
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        cy.get("#wsf-1-field-21").type("Zammy")
        cy.get("#wsf-1-field-22").type("cristo")
        cy.get("#wsf-1-field-23").type("Zammy@gmail.com")
        cy.get("#wsf-1-field-24").type("1515154184")
        cy.get("#wsf-1-field-28").type("Benidorm 27")
        cy.get("#wsf-1-field-27").click()






        cy.wait(3000);
    })
})
