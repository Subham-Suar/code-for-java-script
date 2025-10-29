const name = "Subham"
const repoCount =50

//console.log (name+ repoCount +" Value")

// String inter pulation metod 

//console.log(`Hello my name is ${name } and my repoCount ${repoCount}`);


//Declaration of string object 

const gameName = new String("Subham");

console.log (gameName);
console.log (gameName[0]); // o/p :- S  //Curly braces {} in JavaScript are used for objects, code blocks, or template literals, not for indexing.

//e.g:-console.log(`First letter is: ${gameName[0]}`);

console.log(gameName.__proto__); // o/p :-{} i.e Object type 
 
let upperValue = gameName.toUpperCase();
console.log(upperValue);

const url ="https://github.com/hiteshchoudhary%26js-hindi-youtube"

console.log(url.replace("%26" , '-'));

console.log(url.includes("hitesh"));

