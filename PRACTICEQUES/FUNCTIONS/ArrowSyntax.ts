
import * as readline from "readline";

const r1=readline.createInterface(
    {
        input:process.stdin,output:process.stdout

});

const cube=(num:number):number=>{
    return num *num*num;
};
r1.question("Enter a no: ",(answer:string)=>{
    const num=parseInt(answer);
    console.log("cube=",cube(num));
    r1.close();
});