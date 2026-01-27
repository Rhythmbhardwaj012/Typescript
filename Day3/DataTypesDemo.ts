/*
//1 premitive data types

number
string
boolean
null
undefined
union type
void

//2 non premitive dt
array
class inteface
function
tuple
etc.
*/

//1.number type

// let age:number=20;
// let price=25.5;

// let big=42342684;

// console.log(typeof(age));
// console.log(typeof(price));
// console.log(typeof(big));


// string type

// let firstName:string="joe";
// let lastName:string="doe";
// //console.log(firstName +" "+ lastName);
// console.log(`hello ${firstName} ${lastName}`);

// let isStudent:boolean=true;
// let hasJob:boolean=false;


// console.log(isStudent);
// console.log(hasJob);


//null and undefined

// let emptyValue:null=null;
// let notassigned:undefined=undefined;
// console.log(emptyValue);
// console.log(notassigned);


//5. ANY TYPE

// let value:any="Welcome";
// console.log(typeof(value))
// value=100;
// value=true;
// console.log(value);



/*6. UNION TYPE- COMBINE multiple types

let id:number |string |boolean;

id="ABC123";
console.log(id);

id=12345
console.log(id);

id=true
console.log(id);
*/


//7. VOID TYPE
//udes for functions that dont return anything


/*

function show():void
{
    console.log("welcome")
}
 */

function sum(x:number,y:number):number{
    return(x+y);
}


let res:number=sum(10,20);

console.log(res);

