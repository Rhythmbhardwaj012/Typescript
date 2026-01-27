
//increment decrement

require("readline").createInterface({input:process.stdin,output:process.stdout}).question("Enter no:",(i:string)=>console.log(+i%2===0?"Even":"Odd"));


require("readline")
.createInterface({ input: process.stdin, output: process.stdout })
.question("Enter number: ", (n: string) =>
  console.log(+n >= 0 ? "Positive" : "Negative")
);
