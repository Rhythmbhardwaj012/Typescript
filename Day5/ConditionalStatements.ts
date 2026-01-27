//if condition 

/*

if(condition){
//statements
}
*/
   //Example 1
//if else condition
   let age:number= 2;

   if(age>=18){
    console.log("You are eligible ");
   }else {
    console.log("You are not eligible")
   }

   //example 2:
   //check odd or even

   let num:number=6;

if(num%2==0){
    console.log(`${num} is even`);
}else{
    console.log("number is odd");
    console.log(`${num} is odd`)
}

//Nested if else
    //Example 3
//display grade based  on marks

let marks:number=40;

if(marks>=90 && marks<=100){
    console.log(`${marks} grade A`);
}else if(marks>=75 && marks<90){
    console.log(`${marks} grade B`);
}else if(marks>=50 && marks<75){
    console.log(`${marks} grade C`);
}else if(marks>35 && marks<50){
    console.log("Fail");
}
//Example 4
//browser selction

let browser:string="xyz";

if(browser==="chrome"){
    console.log("browser is chrome");

}else if(browser=="edge"){
    console.log("edge is browser");
}else if(browser=="firefox"){
    console.log("firefox is browser");
}else{
    console.log("this is not a browser");
}



//Switch case statement

//EXAMPLE 5


let day:number=23;
switch(day){
    case 1:
        console.log("Monday");
        break;

case 2: 
console.log("Tuesday");
break;

case 3:
    console.log("Wednesday");
    break;
    case 4:
        console.log("Thursady");
        break;

        case 5:
            console.log("Friday");
            break;
            case 6:
                console.log("Saturday");
                break;
                case 7:
                    console.log("Sunday");
                    break;

                    default:
                        console.log(" Invalid --only 7days a week");
}



//include expresssion

let m:number=5, y:number=5;

switch(m-y){
    case 0: console.log("Result 0");
    break;
    case 1: console.log("result is 5");
    break;
    case 2: console.log("result is 10");
    break;
    default:
        console.log("invalid");

}
