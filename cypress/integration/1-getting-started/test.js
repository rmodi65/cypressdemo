/// <reference types="cypress" />
describe('Open the github and search the javascript', () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
       // cy.viewport(1280, 1000)
      })
    
    it('open the link', () => {
        cy.visit('https://github.com')
    });

    it('Search react in github search',function(){
        cy.get('.header-search-wrapper > .form-control').type('React').type('{enter}')
        cy.get('.mt-3 > a.f6').click()
        cy.get("#search_language").select('JavaScript',{ force: true }).should('hava.value','JavaScript')
        

    })
    
});