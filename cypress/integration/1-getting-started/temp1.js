 function countChar(str)
      {
       let countChar={};   
       str.split('').forEach(function(c){
           if(c!=' ')
           countChar[c]?countChar[c]++:countChar[c]=1
       });
       return countChar;
      }
      
      let res=countChar("Valuelabs Technologies");
      for(let value in res)
      {
          console.log(value +" "+res[value]);
      }
      

  