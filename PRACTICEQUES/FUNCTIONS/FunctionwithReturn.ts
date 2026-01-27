//multiplication

import * as  readline from "readline";

const r1=readline.createInterface({
    input:process.stdin, output:process.stdout
    
});


function multiply(a:number,b:number):number{
    return a*b;
}

r1.question("Enter first number :", (a:string)=>{
    r1.question("Enter second number: ",(b:string)=>{
        console.log("result=",multiply(parseInt(a),parseInt(b)));
        r1.close();
    });
});