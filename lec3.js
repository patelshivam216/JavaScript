
// For printing use 
// console.log();
console.log("starting");

/**
 * There are three type
 * 1. var
 * 2. const - its scope is globle
 * 3. let - its scope is within block
 * 
 * const is Not changable and must intialized with its declaration
 * 
 * for STRING 
 * 
 * 1. valid: 'shivam'
 * 2. valid: "shivam"
 * 3. valid `sh'iv"am`
 


*/

var name = "shivam";
name = "patel";// valid reinitialization

var marks;
marks = 45;

console.log(name, marks);

const ownerName = 'shivam patel';
// ownerName=`patel`; gives error
console.log(ownerName);

var arr = [2, 3, 4, 4, 7];
console.log(arr);// i can again reinitialize it 

const arr1 = [1, 4, 45];
console.log(arr1);// i cant rei it but i can add or append element 

// for undefined 
var c;

arr1.push(222);
arr.push(222);

console.log(arr, arr1,c);// c is for see undefined (its not initialized)


// use of let data type
var city = 'vijapur';


{

    let city = "fudeda";
    console.log(city);

}
console.log(city);


/**
 * Most common programing case type
 * 
 * 1. camleCase  
 * 2. kebab-case  
 * 3. snake_case  
 * 4. PascalCase 
 * 
 */