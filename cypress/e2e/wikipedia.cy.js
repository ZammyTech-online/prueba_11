require('cypress-xpath')

describe('Adaptación de Selenium a Cypress', () => {

    // Paso 1: Navegar a Google y buscar "automatización"
    it('Navegar y buscar en Google', () => {
        cy.VisitarWeb('https://www.google.com',3);  // Navegar a Google
        cy.BuscarYEnviar('APjFqb', 'automatización', 4);
        cy.buscarYHacerClic('h3.LC20lb.MBeuO.DKV0Md', 'Automatización - Wikipedia, la enciclopedia libre', 5000);
        cy.buscarTextoEspecifico('300 a. C.', 5000);
        cy.capturaElementoConTexto('p', '300 a. C.');



        

    
        
        
        
        
        
        
        
    
        
        
        
        

        
          // Esperar 2 segundos antes de enviar  // Esperar hasta que el elemento con id 'APjFqb' esté presente y visible       // cy.Texto_visible('input[name="q"]', 'automatización', 20000);  // Buscar "automatización"
    });
/*
    // Paso 2: Hacer clic en el enlace de Wikipedia resultante
    it('Hacer clic en el enlace de Wikipedia', () => {
        cy.Click('a[href*="wikipedia.org"]', 2000);  // Hacer clic en el enlace de Wikipedia
    });

    // Paso 3: Comprobar en qué año se hizo el primer proceso automático
    it('Comprobar año del primer proceso automático', () => {
        // Asumiendo que la información está en el párrafo 28 como en el ejemplo de Selenium
        cy.get('#mw-content-text > div.mw-parser-output > p:nth-child(28)').then(($p) => {
            const texto = $p.text();
            const indiceInicio = texto.indexOf('300 a. C.');
            if (indiceInicio !== -1) {
                const textoExtraido = texto.substring(indiceInicio, indiceInicio + '300 a. C.'.length);
                cy.log(textoExtraido);  // Log '300 a. C.' en la consola de Cypress
            } else {
                cy.log("'300 a. C.' no se encontró en el texto del elemento");
            }
        });

        // Para el scroll y captura, puedes usar una función personalizada si la tienes definida
        // Asumiendo que tienes una función personalizada llamada scroll_y_captura
        cy.get('#mw-content-text > div.mw-parser-output > p:nth-child(28)').then(($p) => {
            const elemento = $p[0];
            cy.scroll_y_captura(elemento);  // Asumiendo que tienes una función personalizada llamada scroll_y_captura
        });
    });*/
});
