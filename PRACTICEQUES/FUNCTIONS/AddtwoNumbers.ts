import * as readline from "readline";

// const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function addNumbers(a: number, b: number): number {
    return a + b;
}

rl.question("Enter first number: ", (answer1: string) => {
    const num1 = parseFloat(answer1);

    
    rl.question("Enter second number: ", (answer2: string) => {
        const num2 = parseFloat(answer2);

        console.log(`Sum: ${addNumbers(num1, num2)}`);

        rl.close(); 
    });
});