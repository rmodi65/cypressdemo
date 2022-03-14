describe('Example', function() {
    // let testData;
   
     beforeEach(function() {
       cy.fixture('data').then(function(dataJson) {
         this.dataJson = dataJson;
      //   return testData;
       });
     });
     it('name',  function()  {
       const temp=this.dataJson.dropdownValues;
        expect(temp).to.include('5')
        expect(temp[0]).to.eq('5')
        expect(temp).to.length(7)
        
      });
     
   });