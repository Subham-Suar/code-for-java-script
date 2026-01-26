//const {score} =req.body


// Here the concept is object Destructuring and why score is inside curly braces. This is a JavaScript feature called object destructuring. Let’s break it down clearly.

/*
const user = {
  name: "Alice",
  score: 95
};

If you want to get score from user, normally you’d do:

const score = user.score;


✅ Works fine.

With destructuring:
const { score } = user;


The {} curly braces mean “pull the property named score from the object”.

After this line, you get a variable score that contains the value 95.

Instead of writing req.body.score, you can write:const { score } = req.body;

Multiple variables at once

const { score, name } = req.body;

*/


let score1 = 33;
let score2 ="35";
//console.log(typeof( score1)); // o/p:-number 
//console.log(typeof score2); //o/p :- string

let valueInNumber = Number(score2);

//console.log(typeof valueInNumber); // o/p :- number

// "33" converted to 33
// "33abc" => NaN
// true => 1 ,false => 0 

//Similarly converstion of values into Boolean type

let isLoggedin = 1 ;

//console.log(isLoggedin);

let converstionType = Boolean(isLoggedin);

//console.log(typeof converstion)


const onCurrencyChange = (num)=>{
    console.log(num);
    
}

console.log(onCurrencyChange)