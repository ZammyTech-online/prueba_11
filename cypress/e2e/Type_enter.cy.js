
describe("seccion 1 validando el titulo", () =>{

    it("Test validar el titulo", () =>{
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')
        cy.wait(3000)
        
       cy.get("[name=q]").type("Cypress io {enter}")
       cy.wait(400)
       cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()
     


      //  cy.get("#APjFqb").type("zammy cristo y yennifer marcano")
        // FUNCIONA CON NAME Q Y EL EJEMPLO DE PYTHON 
        
    })

  
})


   


