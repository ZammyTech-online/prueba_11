require('cypress-xpath')

Cypress.Commands.add("Texto_visible", (selector, texto, t) => { 
   let tiempo = t;
   cy.get(selector, { timeout: 20000 }).should('be.visible').type(texto);
   cy.wait(tiempo);
});

// ... (resto del código sin cambios)
Cypress.Commands.add("simpleTest", () => {
   console.log("This is a simple test");
});


Cypress.Commands.add("ClickBotonSubmit", (selector, tiempoEspera) => { 
   cy.xpath(selector, { timeout: 10000 }).should('be.visible').click();
   cy.wait(tiempoEspera);
});

Cypress.Commands.add("VisitarWeb", (url, tiempoEspera) => { 
   cy.visit(url)
});

Cypress.Commands.add("BuscarYEnviar", (id, texto, tiempoEspera) => {
   let tiempo = tiempoEspera * 1000;  // Convertir segundos a milisegundos

   // Esperar a que el elemento esté visible, escribir texto, y luego enviar (submit)
   cy.get(`#${id}`, { timeout: 10000 })
       .should('be.visible')
       .type(texto)
       .wait(tiempo)
       .type('{enter}');  // Enviar el formulario con la tecla Enter
});


Cypress.Commands.add('hacerClicEnResultado', (terminoBusqueda) => {
   // Buscar el término de búsqueda y hacer clic en él
   cy.get('h3').contains(terminoBusqueda).first().click();
});

Cypress.Commands.add('buscarEnlace', (selector, texto, tiempo) => {
   // Verificar que el elemento existe y es visible
   cy.get(selector, { timeout: tiempo }).should('be.visible');

   // Verificar que el elemento contiene el texto esperado
   cy.get(selector).should('contain', texto);
});

Cypress.Commands.add('buscarYHacerClic', (selector, texto, tiempo) => {
   // Buscar el elemento por su selector y texto, y luego hacer clic en él
   cy.get(selector, { timeout: tiempo }).should('be.visible').contains(texto).click();
});





Cypress.Commands.add('esperoElemento', (selector, texto, tiempo) => {
   // Buscar el elemento por su selector y esperar a que esté visible
   cy.get(selector, { timeout: tiempo }).should('be.visible');

   // Verificar que el elemento contiene el texto esperado y luego hacer clic en él
   cy.get(selector).contains(texto).click();
});



Cypress.Commands.add("EsperoElemento", (id) => {
   cy.get(`#${id}`, { timeout: 10000 }).should('be.visible');
});




 Cypress.Commands.add("Texto_visible_xpath", (selector,texto,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
 })

// Definición del comando personalizado
Cypress.Commands.add('buscarTexto3', (texto, tiempo) => {
   // Buscar el texto en la página web
   cy.contains(texto, { timeout: tiempo }) // Buscar el texto en la página web
      .should('be.visible').then(($elemento) => {
          // Extraer el texto del elemento
          const textoExtraido = $elemento.text();

          // Mostrar el texto extraído
          console.log(textoExtraido);
      });
      cy.screenshot(`${elemento}-${texto.replace(/\s+/g, '-')}`);

});

Cypress.Commands.add('buscarTextoEspecifico', (texto, tiempo) => {
   cy.contains(texto, { timeout: tiempo }).should('be.visible').scrollIntoView();
   cy.contains('300 a. C.').scrollIntoView();

 });
 
 Cypress.Commands.add('capturaElementoConTexto', (elemento, texto) => {
   // Buscar el elemento que contiene el texto especificado
   cy.contains(elemento, texto)
     .should('be.visible')
     .screenshot(`${elemento}-${texto.replace(/\s+/g, '-')}`);
 });



Cypress.Commands.add('comprobarElementoPorXPath', (xpath, tiempo) => {
   // Buscar el elemento por su XPath y verificar que esté visible
   cy.xpath(xpath).should('be.visible', { timeout: tiempo });
});

 Cypress.Commands.add("Click", (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)
 })

 Cypress.Commands.add("Click_force", (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
 })

 Cypress.Commands.add('buscarYHacerClic', (selector, texto, tiempo) => {
   // Buscar el elemento por su selector y texto, y luego hacer clic en él
   cy.get(selector, { timeout: tiempo }).should('be.visible').contains(texto).click();
});

// Definición del comando personalizado
Cypress.Commands.add('buscarTexto1', (texto, tiempo) => {
   // Buscar el texto en la página web
   cy.contains(texto, { timeout: tiempo }) // Buscar el texto en la página web
      .should('be.visible'); // Asegurarse de que el texto es visible
});


 Cypress.Commands.add("Click_force_xpath", (selector,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
 })

 Cypress.Commands.add('buscarTexto', (texto, tiempo) => {
   // Buscar el texto en la página web
   cy.contains(texto, { timeout: tiempo }) // Buscar el texto en la página web
      .should('be.visible'); // Asegurarse de que el texto es visible
});

 Cypress.Commands.add('capturaElementoConTexto', (elemento, texto) => {
   // Buscar el elemento que contiene el texto especificado
   cy.contains(elemento, texto)
     .should('be.visible')
     .screenshot(`${elemento}-${texto.replace(/\s+/g, '-')}`);
 });
 

 Cypress.Commands.add("Validar_campo", (selector,men,nombre_campo,t) => { 
   cy.xpath(selector).should("be.visible").then((val)=>{
      let dato=val.text()
      cy.log("el valor del log es: " + dato)
      let mensaje=men
      cy.log(dato)
      expect(dato).to.equal(mensaje)
      if(dato==mensaje){
        cy.log("########################")
        cy.log("El "+ nombre_campo  +" no es valido")
        cy.log("########################")

      }
    })
})

Cypress.Commands.add("Validar_campo2", (selector,men,nombre_campo,t) => { 
   cy.xpath(selector).should("be.visible").should("contain",men).then((val)=>{           
   cy.log("########################")
   cy.log("El "+ nombre_campo  +" no es valido")
   cy.log("########################")      
    })
})


 



 








 //Funciones por conjunto o completas
 //creando la funcipi Toolsqa

 Cypress.Commands.add("Bloque_ToolsQA", (name, email,dir1,dir2,t) => {
     let tiempo=t
     cy.get('"#wsf-1-field-21"').should('be.visible').type(name)
     cy.wait(tiempo) 
     cy.get('"#wsf-1-field-23"').should('be.visible').type(email)
     cy.wait(tiempo) 
     cy.get('"#wsf-1-field-24"').should('be.visible').type(dir1)
     cy.wait(tiempo) 
     cy.get('"#wsf-1-field-28"').should('be.visible').type(dir2)
     cy.wait(tiempo) 
    // cy.get('#submit').should('be.visible').click({force: true})
     cy.wait(tiempo)

})

Cypress.Commands.add("Bloque_ToolsQA_zammy", (name, email, dir1, dir2, t) => {
   let tiempo = t;
   cy.Texto_visible("#wsf-1-field-21", name, 2000);  // Selector CSS para el campo nombre     
   cy.Texto_visible("#wsf-1-field-23", email, 2000); // Selector CSS para el campo email 
   cy.Texto_visible_xpath("//*[@id='wsf-1-field-24']", dir1, 1000); // XPath para el campo teléfono
   cy.Texto_visible_xpath("//*[@id='wsf-1-field-28']", dir2, 1000); // XPath para el campo descripción
   cy.Click_force_xpath("//button[contains(@id,'submit')]", 500);
});



Cypress.Commands.add("Bloque_Reto_Form", (name,last_name,email,tel,dir1,ciudad,estado,cp,web,proyecto,t) => {
   let tiempo=t
   cy.xpath("//input[contains(@name,'first_name')]").clear().should('be.visible').type(name)
   cy.wait(tiempo)
   cy.xpath("//input[contains(@name,'last_name')]").clear().should('be.visible').type(last_name)
   cy.wait(tiempo)
   cy.xpath("//input[contains(@name,'email')]").clear().should('be.visible').type(email)
   cy.wait(tiempo)
   cy.xpath("//input[contains(@name,'phone')]").clear().should('be.visible').type(tel)
   cy.wait(tiempo)
   cy.xpath("//input[contains(@name,'address')]").clear().should('be.visible').type(dir1)
   cy.wait(tiempo)
   cy.xpath("//input[contains(@name,'city')]").clear().should('be.visible').type(ciudad)
   cy.wait(tiempo)
   cy.xpath("//select[contains(@name,'state')]").select(estado, { force: true })
   cy.wait(tiempo)
   cy.xpath("//input[contains(@name,'zip')]").clear().should('be.visible').type(cp)
   cy.wait(tiempo)
   cy.xpath("//input[contains(@name,'website')]").clear().should('be.visible').type(web)
   cy.wait(tiempo)
   cy.xpath("//input[contains(@value,'yes')]").check().should('be.checked')
   cy.wait(tiempo)
   cy.xpath("//textarea[contains(@class,'form-control')]").clear().should('be.visible').type(proyecto)
   cy.wait(tiempo)
   cy.xpath("//button[@type='submit'][contains(.,'Send')]").should('be.visible').click({force: true})
   cy.wait(tiempo) 

});

Cypress.Commands.add("Bloque_Reto_Form_corto", (name, last_name, email, tel, dir1, boton, t) => {
   let tiempo = t;

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
});


   



