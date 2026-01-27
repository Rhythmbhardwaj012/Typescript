
//for loop:

/*
syntax:

for(initilization;condition; inc/dec)
{
//statements;
}

*/
//example 1: print 1........10


/*
for(let i=1;i<=10;i++)
{
console.log(i);
}


*/




//Example 2: print even no's between 1-10;

/*
for(let i=2;i<=10;i+=2)
    {
        console.log(i);

}
*/


//method 2:
/*

for(let i=1;i<=10;i++){

    if(i%2==0)
    {
        console.log(i);
    }
}

*/

/*

for(let i=10;i>=1;i--){
    console.log(i);
}

*/


// let i:number;

// for(let i=1;i<=5;i++)
// {
//     console.log(i);
// }


//EXAMPLE4
 
// let i:number;
// for(i=1;i<=5;i++){
//     console.log(i);
// }
// console.log(i);



// let i:number;

// for(i=1;i<=5;i++){

//     console.log(i);
// }


// let num: number =  4560;
// let rev: number = 0;

// while (num > 0) {
//   rev = rev * 10 + (num % 10);
//   num = Math.floor(num / 10);
// }

// console.log(rev);





//
 





// r1.question("Enter no: ", (input: string) => {

//   let n: number = Number(input);

//   if (n % 2 === 0) {
//     console.log("number is even");
//   } else {
//     console.log("odd");
//   }

//   r1.close();
// });




// import * as readline from "readline";

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// r1.question("Enter no: ", (input: string) => {
//   let n = Number(input);
//   console.log(n % 2 === 0 ? "Even" : "Odd");
//   r1.close();
// });


require("readline").createInterface({ input: process.stdin, output: process.stdout })
.question("Enter no: ", (i: string) => console.log(+i % 2 === 0 ? "Even" : "Odd"));
