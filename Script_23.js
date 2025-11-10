const chai = function(){
    let userName = "Subham"
    //console.log(this)
}
chai()

const concept_of_THIS = () => {
    let userName="Amlan"
   // console.log(this.userName);
}
concept_of_THIS()

function greet(){
    console.log(`Hi my name is ${this.userName}`);
}

const person = {userName:"Subham", age:30 , branch:"CSE(AI)",functionality:greet}

greet();  // o/p:- Hi my name is undefined

person.functionality(); // o/p:- Hi my name is Subham



//++++++++++++++++++++Core Concept of Arrow ( () => {}) function +++++++++++++++++++++++++++++++++

const addTwoNumbers = (num1 , num2) => {
    return num1+num2;
}


const subTwoNumbers = (num1 , num2 ) => (num1 - num2)  // use of parenthesis we have not use return keyword 


