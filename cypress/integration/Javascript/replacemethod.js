let str="My 589 name &^&*^& is 4 rohit kumA**r";

//segregate number string special character
console.log(str.replace(/[^\d]/g,'')+" ---------"+str.replace(/[^a-z]/gi,'')+"-----"+str.replace(/[\da-z]/gi,''))
// 5894 ---------MynameisrohitkumAr-----   &^&*^&    **

//get number from string
console.log(str.replace(/[^\d]/g,'')) //5894

//remove number from string
str=str.replace(/[\d]/g,'')
console.log(str) //My  name &^&*^& is  rohit kuma**r

//get special character from string
console.log(str.replace(/[a-zA-Z]/g,'')) //   &^&*^&    **

//remove special character frim string
str=str.replace(/[^a-zA-Z]/g,'')
console.log(str) //Mynameisrohitkumar

//replace vowel with * symbol
console.log(str.replace(/[^aeiou]/gi,'*'))
