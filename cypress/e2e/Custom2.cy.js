/// <reference types='Cypress' />

import 'cypress-file-upload';
import { Runnable } from 'mocha';
require('@4tw/cypress-drag-drop');
require('cypress-xpath');
require('cypress-plugin-tab');

describe('Comandos Personalizados', () => { 
    let tiempo = 1000;
    before(() => {    
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.wait(tiempo);
    });

    Cypress.on('uncaught:exception',(err, Runnable) =>{
        return false
    })

    it('Tes Custom2 Optimizado', () => {
        cy.Bloque_Reto_Form_corto("Juan", "Pérez", "juan@email.com", "657538899", "Calle Falsa 123", "Submit", 500);    
    });

  //  it.only('Demo dos por bloque', () => {
   //     cy.Bloque_ToolsQA_zammy("juan", "apellido", "jaun@email.com", "232323", "direccion", 600);
   // });
});
