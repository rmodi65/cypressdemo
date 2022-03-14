let res=(array)=>{
 let countArray={}
 console.log(array)

 array.forEach(element => {
    countArray[element]?countArray[element]++:countArray[element]=1
 });
 return countArray;
}

let output=res([1,5,1,8,9])

for(value in output)
{
    console.log(value+" "+output[value])
}