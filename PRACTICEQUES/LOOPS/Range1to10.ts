//Print numbers from 1 to 10

const readline=require("readline");

const r1=readline.createInterface({
    input:process.stdin,output:process.stdout
});


for(let i:number=1;i<=10;i++){
    console.log(i);
}