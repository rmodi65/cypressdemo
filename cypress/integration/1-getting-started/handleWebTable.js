
describe('this is webtable demo scenario', () => {

    let company='Srestha Finvest Ltd.'
    it('this is first test case of webtable demo', () => {
       cy.visit('https://money.rediff.com/companies/results')
       cy.get(".dataTable tr td:nth-child(1)").each(($el,index,arr)=>{
           if($el.text().includes(company)){cy.wrap(index).as('position'); return false}
       })
       cy.get('@position').then(indexValue =>{
       cy.get('.dataTable tr:nth-child('+(++indexValue)).find('td').each(($el,index,arr)=>{
           cy.log($el.text())
       })
    })

    });
    it('search the coforge ltd and find the 52 week high and 52 week low',()=>{
        cy.visit("https://money.rediff.com/index.html")
        cy.get('.txt_srch').type('Coforge ltd').type('{downArrow}').type('{enter}')
        cy.title().should('include','COFORGE')
        //getcurrent price
        cy.get('#ltpid').invoke('text').then(function(value){
            cy.log('coforge current price is '+value)
        })
        cy.get('#FiftyTwoHighlow').invoke('text').then(function(value){
            cy.log('coforge 52 week high price is '+value.trim().split('-')[0])
            cy.log('coforge 52 week low price is '+value.trim().split('-')[1])

        })
       
    })
    
});