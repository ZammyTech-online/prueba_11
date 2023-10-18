/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');
require('cypress-xpath');
require('cypress-plugin-tab');

describe('Page Objects Models', () => { 
    let tiempo = 1000;
    before(() => {    
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.wait(tiempo);
    });

    Cypress.on('uncaught:exception',(err, Runnable) =>{
        return false
    })
    
    it('test', () => {
       cy.log("hola")
    })
});