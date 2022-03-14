describe('Example', function() {
     let testData;
   
     beforeEach(function() {
      // return testData;
     });
   
     it('name', function() {
         testData='rohit';
       cy.log(testData);
     });
     it('name2', function() {
         cy.log(testData)
     });
   });