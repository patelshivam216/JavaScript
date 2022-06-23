console.log("lecture 10 function");

//function defination also i can provide default value
function greet(name,wish='thanks'){

    console.log(`${name}Wishing you a day filled with happiness and a year filled with joy. Happy birthday!” “Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!” “Hope your special day brings you all that your heart desires! Here's wishing you a day full of pleasant surprises!${wish}`);

    return 1;
}

let name = 'shivam';
let thankWish='thanks';

let val=greet(name);// function call
console.log(val);



// make variable which is a function

const f=function(value1,value2){
    value1=value1+value2;
    // console.log(value1);
    return value1;
}

let value=f(3,4);// so basically f is variable which is function
console.log(value);


// for object

let myOb={
    name:'shivam',
    game: function(){
        return 'GTA';
    }
}

console.log(myOb.game());



var i=8;

function ui(){
    let i=234;
    console.log(i);
}
ui();
console.log(i);

