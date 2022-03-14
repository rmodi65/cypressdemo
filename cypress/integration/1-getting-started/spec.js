/// <reference types="cypress" />
//const cypress = require("cypress");
//const { describe } = require("mocha")

describe('test user', () => {
 let user;
 let val;
 beforeEach(function() {
     cy.fixture('example').then(function(dataJson) {
     this.dataJson = dataJson;
     return dataJson;
  });
});


beforeEach(function(){
  cy.fixture('data').then(function(testdataJson){
    this.testdataJson=testdataJson;
    return testdataJson
  })
})

   
   it('open website', function()  {
        cy.visit('http://demowebshop.tricentis.com/');
        cy.title().should('eq','Demo Web Shop');
      
    });
    it('Login to website', function()  {

         cy.login(this.dataJson.email,this.dataJson.password)
         cy.get('.ico-logout').should('be.visible');
         cy.screenshot()
    });
    xit('find number of computers types', () => {
        
       
        //cy.get('.top-menu > :nth-child(2) > ul > li > a').should('have.length', 3);
        let indexValue
        cy.get('ul.top-menu li a').each(($el, index, $list) => {
            if ($el.text().includes('Computers')) {
                cy.wrap(index).as('indexValue')
                index+=1
                val=index;
                user=$el.text();
                cy.get('.top-menu > :nth-child('+index+') > [href="/computers"]').trigger('mouseover')
                return false;
            }
          })
          cy.get('@indexValue').then(indexValue =>{
            cy.log('my index value '+indexValue);
            indexValue+=1
            cy.get('.top-menu > :nth-child('+val+') > ul > li > a').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            cy.log($el.text())
            if ($el.text().includes('Desktop')) {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click();
              return false;
            } 
          })
        })
        
    });

     xit('check currect page and position dropdown asserstion', () => {
         cy.get('.current-item').invoke('text').should('include','Desktops');
         cy.log('correct page landing');
         cy.get('#products-orderby option[selected]').invoke('text').should('include','Position')
         cy.get('#products-orderby option').invoke('text').should('include','Created on')
         cy.get('select#products-orderby').select('Price: Low to High')
         cy.get('#products-orderby option[selected]').invoke('text').should('include','Price: Low to High')
         cy.get('#products-orderby option').should('have.length',6)
        });

     it('Build your own cheap computer select', () => {
         cy.get(".product-title a[href='/build-your-cheap-own-computer']").click()
         cy.get('.breadcrumb a span').invoke('text').then(text =>{
           cy.get('.current-item').invoke('text').then(citem =>{
             cy.log(text+citem)
             expect(text+citem).to.contain('HomeComputersDesktopsBuild your own cheap computer')
           })
         })
     });
});