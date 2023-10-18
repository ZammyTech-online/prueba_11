/// <reference types='Cypress' />
export default proyectoUno_PO;

import proyectoUno_PO from '../support/PageObjects_proyectoUno_PO/ProyectoUno_PO.cy';
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');
require('cypress-xpath');
require('cypress-plugin-tab');

describe('Page Objects Models', () => { 

    const master=new proyectoUno_PO()
    const master2=new proyectoUno_PO()

    master.visitHome()
    master2.visitHome()

    Cypress.on('uncaught:exception',(err, Runnable) =>{
        return false
    })

    it('test uno', () => {
       cy.log("hola")
    })
});