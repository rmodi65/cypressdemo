let textArray = "helloindiaallhave".split('');
let check={}
let res=[]
textArray.forEach(ele=>{
    if(check[ele])
    {
        if(!res.includes(ele))
        {
            res.push(ele)
        }
    }
    else
    check[ele]=true
})
console.log(res)