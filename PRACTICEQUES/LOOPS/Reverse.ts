//Reverse a number 

// const readline=require("readline");

// const r1=readline.createInterface({
//     input:process.stdin,output:process.stdout
// });

r1.question("Enetr a no: ",(x:string)=>{
    let val:number=+x;
    let rev:number=0;
    while(val>0){
        rev=rev *10 +(val%10);
        val=Math.floor(val/10);
    }
    console.log("Reversed:",rev);
})