
//example 1: named function with no parameters and no return type



// function display(): void{

//     console.log("welcome");
// }

// display();


// function addNumbers(x:number, y:number):number{
//     return x+y;
// }

// console.log(addNumbers(2,3));
// console.log(addNumbers(1));

//example 3
//named function with rest parameters


function addNumbers(...nums:number[]):number
{
   let i;
   let sum:number=0;

   for(i=0;i<nums.length;i++){
    sum=sum+nums[i];
   }
   console.log("sum of the numbers",Sum)
    

}



