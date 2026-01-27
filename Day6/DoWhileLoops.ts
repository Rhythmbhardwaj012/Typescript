//do while loop: executes at least once before checking condition


// do{
//     //statements;

// }while(condition);

//example 1
/*
let i:number=1;

do{
    console.log(i);
    i++;
}while(i<=5);

*/



//example 2: 10 9 8.

// let j:number=10;

// do{
//     console.log(i);
//     i--;
// }while(i>=1);










let input: string = prompt("Enter a string") || "";

let reversed = input.split("").reverse().join("");

console.log("Reversed string:", reversed);

