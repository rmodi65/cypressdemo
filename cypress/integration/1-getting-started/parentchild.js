/// <reference types="cypress" />
describe('amazon', () => {
    
  it('search samsung ', function()  {
     cy.visit('https://www.amazon.in')
     cy.get('#twotabsearchtextbox').type('samsung mobile')
     cy.get('#nav-search-submit-button').click()
     cy.title().should('include','samsung mobile')

  });

  it('print all samsung mobile name', function() {
      let count=0;
      cy.get("div[data-component-type='s-search-result'] [class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']  span").each(($el,index,$list) => {
        cy.log($el.text()+"^^^^^^"+count++)
        
        if($el.text().includes('Samsung Galaxy M32 5G '))
        {
            cy.wrap(index).as('val')
            cy.log('under %%%%%% result'+index)
            return false;
        }
      })

  });
  
  it('print the price of selected mobile',function(){
     
  
      cy.get('.a-price-whole').eq(this.val).invoke('text').then(function(value){
          cy.log('total price '+value);
      })           
           

    

  })

});