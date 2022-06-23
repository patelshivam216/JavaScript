console.log('arrays');

let arr=[1,2,3,4,5,6,7];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let k=0;
while(k<5){
    console.log(arr[k]);
    k++;
}

k=0;

do{
    console.log(arr[k]);
    k++;
}while(k<5)

arr.forEach(function (element){
    console.log(element);
});


//--------------->>>>    object and its iteration    <<<<-------------------

let myOb={
    name: 'shivam',
    age: 19,
    collage: 'daiict'
}

for(let key in myOb){
    console.log(`the key is ${key} of object and its value is ${myOb[key]}`);
}


let arr1=['fruit','vagitable','apple'];

arr1.forEach(function(ele,index,array){
    console.log(ele,array,index);
    // console.log(ele,index);
    
})