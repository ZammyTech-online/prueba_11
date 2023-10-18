

class proyectoUno_PO{

    visitHome()
    {
            let tiempo = 1000;
            cy.visit('https://testingqarvn.com.es/datos-personales/');
            cy.title().should('eq', 'Datos Personales | TestingQaRvn');
            cy.wait(tiempo);
        /*let tiempo = 1000;
        before(() => {    
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.wait(tiempo);
        })*/
    }

    SeccionUno(name, last_name, email, tel , dir1, tiempo){
          // Campo nombre
   cy.get("#wsf-1-field-21").clear().should('be.visible').type(name);
   cy.wait(tiempo);

   // Campo apellido
   cy.get("#wsf-1-field-22").clear().should('be.visible').type(last_name);
   cy.wait(tiempo);

   // Campo email
   cy.get("#wsf-1-field-23").clear().should('be.visible').type(email);
   cy.wait(tiempo);

    // Campo teléfono
    cy.xpath("//*[@id='wsf-1-field-24']").clear().should('be.visible').type(tel);
    cy.wait(tiempo);
 
    // Campo dirección
    cy.xpath("//*[@id='wsf-1-field-28']").clear().should('be.visible').type(dir1);
    cy.wait(tiempo);
 
    // Botón submit
    cy.xpath("//*[@id='wsf-1-field-27']").should('be.visible').click({ force: true });
    cy.wait(tiempo);
    }

}//Final 


export default proyectoUno_PO;