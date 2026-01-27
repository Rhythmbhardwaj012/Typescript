
require("readline").createInterface({input:process.stdin, output:process.stdout})
.question("enter no" ,(a:string)=>{
    require("readline")
    .createInterface({input:process.stdin,output:process.stdout})
    .question("enter no:",(b:string)=>
    console.log(+a < +b ? " First is smaller ": "Second is Smaler"));
})

