///<reference types="cypress"/>
describe('scenario of find', () => {
    it('test of find', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get("[name='q']").invoke('attr','title').then(function(text){
            cy.log(text)
        })
        cy.get("[name='q']").type('Samsung mobile').type('{enter}')
        cy.get("[class='col col-7-12'] ").find('> div:nth-child(1)').each(($el,index,arr)=>{
         cy.log($el.text())
        })
    });
   //find the price of  mobiles available with name
    it('print mobile name and price', function()  {
        cy.get("[class='col col-7-12'] > div:nth-child(1)").each(($el,index,arr)=>{
           cy.log($el.text())
            if($el.text().includes('SAMSUNG Galaxy F12 (Sky Blue, 64 GB)')){
                cy.wrap(index).as('value')
                return false
            }


           })
         cy.get("div[class='_30jeq3 _1_WHN1']").each(($el,index,value)=>{
       
            if(this.value==index){

             cy.log($el.text())
            }
         })   
    });
});