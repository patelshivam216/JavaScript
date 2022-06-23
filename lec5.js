console.log("starting type conversation lec3");
//Type converzation

/**
 * if .. i want to see type then command 
 * 
 * console.log(variable , (typeof variable));
 */


// 1. to string 

let myNum=34;
console.log(myNum);// number with blue coloured 

console.log(String(myNum));// string with no colour

myNum=String(34);// also i can change it from here
console.log(myNum);

let boolVar = true;
console.log(boolVar);// boolean 

boolVar=String(true);
console.log(boolVar);// now its string 

let date = new Date();
console.log(date);// object

date = String(new Date());
console.log(date);// string 

let arr1=[1,2,3,4,5];
console.log(arr1,arr1.length);// object

let arr2=String([2,3,4,5]);
console.log(arr2,arr2.length);// its a string and in length , and element both gonna calculate 

// tostring() function

let i=8;
console.log(i);
console.log(i.toString());// i convert in to string 

date = new Date();
console.log(date.toString());

// string to number 

i='45';
i=Number(i);
console.log(i);

// console.log(Number(i));


// NaN - Not a number 

i='45a';
console.log(Number(i));// compiler cant convert it to number

let number = Number('57.435');
console.log(number);// 57.435

number=parseInt('56.78');
console.log(number);// 56

number = '57.346';
number=parseFloat(number);
console.log(number);//57.346

number=12.123;
console.log(number.toFixed(2),(typeof number));//string

number = 1+number.toFixed(2);
console.log(number);// stirng 



//-------------> Type coercion
let myStr='6475';
let myNumber=45;
console.log(myStr+myNumber);//647545-convert myNumber to string then concat to string 

myStr=Number(myStr);
console.log(myStr+myNumber);//6520-simply add two number 











