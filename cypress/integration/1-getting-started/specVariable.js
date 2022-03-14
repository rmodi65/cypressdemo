describe('Example', function() {
   // let testData;
  
    beforeEach(function() {
      cy.fixture('example').then(function(dataJson) {
        this.dataJson = dataJson;
     //   return testData;
      });
    });
  
    it('name', function() {
      cy.log(this.dataJson.email);
    });
    it('name2', function() {
      cy.log(this.dataJson.email);
    });
  });