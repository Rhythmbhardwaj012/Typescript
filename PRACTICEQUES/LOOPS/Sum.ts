// const readline=require("readline");

// const r1=readline.createInterface({
//     input:process.stdin,output:process.stdout
// });

r1.question("Enter a no: ",(a:string)=>{
    let num:number=+a;
    let sum:number=0;
    for(let i:number=1;i<=num;i++){
        sum=sum+i;
    }
    console.log("sum:",sum);
})