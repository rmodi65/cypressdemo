
describe('test user', () => {
    it('test alias', function()  {
        cy.visit('http://demowebshop.tricentis.com/');
        cy.title().should('eq','Demo Web Shop');
        cy.get('#small-searchterms').invoke('attr','value').as('value')
    });
    it('search value', function() {
        this.value='rohit'
    });
    Cypress._.times(10, () => {
    it('search value rohit', function() {
        cy.log(this.value)
    });
})
});
