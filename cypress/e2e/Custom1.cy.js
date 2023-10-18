/// <reference types='Cypress' />

import 'cypress-file-upload';
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

    it('Demo uno', () => {
       cy.Texto_visible("#wsf-1-field-21", "Juan", 2000);     
       cy.Texto_visible("#wsf-1-field-23", "juan@email.com", 2000); 
       cy.Texto_visible_xpath("//*[@id='wsf-1-field-24']", "657538899", 2000);
       cy.Texto_visible_xpath("//*[@id='wsf-1-field-28']", "una prueba mas lograda", 1000);
       cy.ClickBotonSubmit("//*[@id='wsf-1-field-27']", 500);
       //cy.Click_force_xpath("//*[@id='wsf-1-field-27']", 500);
    });

  //  it.only('Demo dos por bloque', () => {
   //     cy.Bloque_ToolsQA_zammy("juan", "apellido", "jaun@email.com", "232323", "direccion", 600);
   // });
});