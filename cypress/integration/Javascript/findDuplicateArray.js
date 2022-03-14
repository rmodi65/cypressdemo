let res=(arr)=>
{
  let seen={}
  console.log(seen['5']=1)
  arr.forEach(ele=>{
     seen[ele]?seen[ele]++:seen[ele]=1 
  })
 return seen;
}
const output=res([55,55,11,7,9,88])

for(value in output)
{
    console.log(value+" : "+output[value])
}