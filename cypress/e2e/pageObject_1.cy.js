/// <reference types='Cypress' />

import proyectoUno_PO from '../support/PageObjects_proyectoUno_PO/ProyectoUno_PO.cy';
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');
require('cypress-xpath');
require('cypress-plugin-tab');

describe('Page Objects Models', () => { 

    const master=new proyectoUno_PO()
    master.visitHome()

    Cypress.on('uncaught:exception',(err, Runnable) =>{
        return false
    })

    it('Test Seccion uno', () => {
      master.SeccionUno("zammy","cristo","zammycred@gmail.com","657538899","Benidorm 27",1000)
        })
});