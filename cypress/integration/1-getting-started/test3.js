/// <reference types="cypress" />

//const cypress = require("cypress");

//const { describe } = require("mocha")
describe('this is first scenario' ,() => {
     it('this is my first test case', function(){
       cy.visit("https://demo.guru99.com/test/web-table-element.php")
      

     })
     it('this is second test', () => {
        cy.get("table tr:nth-child(+index+) td:nth-child(1)").invoke('text').then(function(value){
            if(value=='Colgate Palm.')
            {
              cy.get('table tr td:nth-child(2)').invoke('text').then(function(group){
                 cy.log(group)
              })
              cy.get('table tr td:nth-child(3)').invoke('text').then(function(prevclose){
                 cy.log(prevclose)
              })
              cy.get('table tr td:nth-child(4)').invoke('text').then(function(currentprice){
                 cy.log(currentprice)
              })
              cy.get('table tr td:nth-child(5)').invoke('text').then(function(perChange){
                 cy.log(perChange)
              })
              
 
            }
        })
     });
})