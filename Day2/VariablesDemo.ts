//variable contaier which can hold some data.

//keywords var,let,const

// var age=30;
// console.log("age");

//var :we dont us ethsi in modern ts and js
//let :we can use when variables can change
//const: use when value cant be chnaged

//var comes under functional scope while let and const comes under the block scope



function blockScope(){
    if(true){
        let msg="Hello World";
        const greet="hi";
        console.log(msg);// we can asses it only in th eblock not outside the block
      console.log(greet);
    }
     
}
blockScope();



