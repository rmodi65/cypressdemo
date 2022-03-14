describe('Scenario : To check webtable', () => {
    it('open the url and start test', () => {
     cy.visit('https://demoqa.com/webtables');
    })
     
     it('verify the webtable has corect value', () => {
     // Getting the count total no of elements present and iterate using forEach loop
     cy.get('.rt-tr-group div div div').each(($el,index,value)=>{
         cy.log(index)
        cy.get('.rt-table .rt-tbody div:nth-child('+(index+1)+') div:nth-child(1) div:nth-child(1)').invoke('text').then(function(value){
        cy.log(value)
        //Check table first column has value 'Cierra' if yes then get the other columns details
        if(value.includes('Cierra'))
       {
           cy.get('.rt-table .rt-tbody div:nth-child('+(index+1)+') div:nth-child(1) div:nth-child(2)').invoke('text').should('eq','Vega')
           cy.get('.rt-table .rt-tbody div:nth-child('+(index+1)+') div:nth-child(1) div:nth-child(3)').invoke('text').should('eq','39')
           cy.get('.rt-table .rt-tbody div:nth-child('+(index+1)+') div:nth-child(1) div:nth-child(4)').invoke('text').should('eq','cierra@example.com')

        }

    })
    })
    });
});