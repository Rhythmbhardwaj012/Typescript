// const readline=require("readline");

// const r1=readline.createInterface({
//     input:process.stdin,output:process.stdout
// });


r1.question("Enter no:",(y:string)=>{

    let num:number=Math.abs(+y);
    let count:number=0;


    while(num>0){
        count++;
        num=Math.floor(num/10);
    }
    console.log("Digits: ",count);

    r1.close();
})
