// check id characer is uppercase

function isUpperCase(char: string):boolean{
    return char==char.toUpperCase() && char!==char.toLowerCase();

}
console.log(isUpperCase("A"));
console.log(isUpperCase("z"));

//check if number is multiple of 10


// function isMultipleof10(num: number):boolean{
//    return num%10 === 0;
// }
//    console.log(isMultipleof10(30));
//    console.log(isMultipleof10(33));



   //Compare two n
   // umbers and print larger on
   let c:number=20,d:number=8;

   if(c> d){
    console.log(`${c} is graeter than ${d}`);
}else if(c=d){
    console.log(`${c} is equals to to ${d}`)
}else{
    console.log(`${c}is less than ${d}`);
}







   