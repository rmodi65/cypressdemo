let res=(str)=>{
     let seen={}
    str.split('').forEach(ele=>{
        if(ele!=' ')
        seen[ele]?seen[ele]++:seen[ele]=1   
     });
      return seen;   
}

const output=res('rohit is my name')

for(value in output)
{
    console.log(value+" "+output[value])
}

//to print deuplicate
for(val in output)
{
    if(output[val]>1)
    {
        console.log('duplicate number '+val)
    }
}