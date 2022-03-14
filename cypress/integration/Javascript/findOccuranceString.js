

const res=(str) =>{
    let countChar={};   
    str.split('').forEach((c)=>{
        if(c!=' ')
        countChar[c]?countChar[c]++:countChar[c]=1
    });
    return countChar;

}

const output=res('hello')

for(let value in output)
{
    console.log(value +" "+output[value]);
}