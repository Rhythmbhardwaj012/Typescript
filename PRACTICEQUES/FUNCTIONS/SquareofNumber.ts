import * as readline from "readline";

const r1=readline.createInterface({
    input:process.stdin, output:process.stdout

});


function SquareofNumber(num:number):number{
    return num * num;
}
r1.question("enter a number : ", (answer:string)=>{
    const num=parseInt(answer);
    console.log("Square is: ", SquareofNumber(num));
    r1.close();
});