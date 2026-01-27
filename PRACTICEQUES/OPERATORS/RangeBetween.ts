//IF NO LIES BETWEEN 10 AND 50

// const readline=require("readline");

// const r1=readline.createInterface({
//     input:process.stdin,output:process.stdout
// });


r1.question("Enter a no :",(n:string)=>{
    const num=+n;
    console.log(num>=10 && num<=50? "number is in between 10 to 50":"out of range");

r1.close();
});
