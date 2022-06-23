console.log("lecture 4");

//Strings: Properties,Methods and Template Literals 

let html;
html="<h1> this is Header</h1> " +"<p>this is Para </p>";
console.log(html);

// this is----------------> concat() function
html=html.concat(" this"," is");// assign to html is important here because we are changing out main html string 
console.log(html);

// toLowerCase() and toUpperCase() ---------------> its print only and this is not changing our main html string 

console.log(html.toLowerCase());
console.log(html.toUpperCase());


console.log(html[0]);// this will give first character 

// indexOf() and lastIndexOf()------------------------>

//indexOf() gives first occurance of string and if string is not present then its give -1
console.log(html.indexOf('h1'));
console.log(html.lastIndexOf("h1"));
console.log(html.indexOf("pop"));// gives -1


console.log(html.charAt(3));// gives character at 3 
console.log(html.endsWith("is"));//if html ends with "is" tgen gives 1 otherwise gives 0
console.log(html.includes("is"));
console.log(html.substring(1,6));// gives substring from 1 to 6
console.log(html.slice(-4));//gives last 4 character 
console.log(html.substring(-4))//it gives whole string 
console.log(html.split(' ')); // break string when ' '(space found) into substring and make array from them
console.log(html.replace("this","it"));// replace this with it for only first occurance 




// Template literals for genrate HTML 

let f1="apple";
let f2="banana";
let name=`shivam`;
let myHtml=`Hello ${name}
    <h1> This is inner HTML</h1>

    <p>i like ${f1} and ${f2}</p>
`;
document.body.innerHTML=myHtml;// this will overlap on existing text in body

function sayyy(){
    alert('Hello');
}

