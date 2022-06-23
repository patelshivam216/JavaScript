console.log("Lec 7 for array and object");
const arr=[2,3,4,5,7];
console.log(arr);
const fruit=["apple","banana","pinepal"];
const mixed=[1,2,"string"];

console.log(fruit);
// ith element 
console.log(fruit[0]);
console.log(mixed[0]);

// make array via Array() function
const makeArray = Array(2,3,4,5,"shiv");
console.log(makeArray);

// check if array is exist or not

console.log(Array.isArray(arr));// gives true 
console.log(Array.isArray('ghg'));



arr[0]='shivam';// change value in array also i can get our value from array
let element=arr[1];
console.log(arr,element);



// Modified array 

arr.push(34567);// push element at the end 
console.log(arr);

arr.unshift(797998);// add at front
console.log(arr);

arr.pop();// pop element
console.log(arr);

arr.shift();// pop first element
console.log(arr);

arr.splice(1,2);// splice will remove element from (start,how_much_element) 1 and delete 2 element
console.log(arr);


arr.reverse();// reverse array 
console.log(arr);

// we are able to joint 2 array here 
let arr1=[1,2,3];
let arr2=[4,5,6];
arr1=arr1.concat(arr2);
console.log(arr1);

//-----------------> object

let myOb={
    'first name':'shivam',
    chennel: 'codewithHarry',
    marks:[1,2,3]

}

console.log(myOb);
console.log(myOb['first name']);

console.log(myOb['marks']);