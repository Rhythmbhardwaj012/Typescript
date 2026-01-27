//AT LEATS ONE NO. IS EVEN

 require("readline")
 .createInterface({input:process.stdin,output:process.stdout})
 .question("Enter a no : ", (a:string)=>{

    require("readline")
    .createInterface({input:process.stdin,output:process.stdout})
    .question("Enter a no: ",(b:string)=>console.log( +a%2===0 || +b%2===0 ? "True":"False")
 );
 });



 //Examle 2

 // atleast one of two number is even

// const readline=require("readline");

// const r1=readline.createInterface({
//     input:process.stdin, output:process.stdout
// });
r1.question("ente a no:" , (a:string)=>{

r1.question("enter a no: ",(b:string)=>{
    
    r1.question("Enter no:",(c:string)=>{
        const largest= +a > +b && +a> +c ? +a : +b >+c ? +b : +c;
        console.log("larget number is :",largest);
        r1.close();

    });
})
})
