import * as readline from "readline"

const r1=readline.createInterface({

    input:process.stdin,
    output:process.stdout
})

function checkEvenorOdd(num:number):string{
    return num%2===0 ? "Even" : "Odd";
}

r1.question("Enter a number",(answer:string)=>{
    const num=parseInt(answer);
    console.log("number is: ", checkEvenorOdd(num));
    r1.close();
})