// let month = 3 ;

// switch(month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("March");
//         //break;
//     case 4:
//         console.log("April");
//         break; // it is used to break the control flow
//     case 5:
//         console.log("May");
//         break;
    

//      default:console.log("Invalid input");
//         break;   
// }

//let userMail = "Subham@example" o/p:- true
// let userMail = " "   o/p:-true
// let userMail = ""   o/p:- false
let userMail = [] 

if(userMail){
    console.log("Got user mail");
}else{
    console.log("Don't have user mail")
}

//falsy values are :-

//false ,0 ,-0 , BigInt 0n ,"" ,null , NaN

//truthy value are in the note 

//Nullish coalscing operator (??): null undefined

let val1;
//val1 = 5 ?? 10  o/p:- 5
// value = null ?? 10  o/p:-10
// value = undefined ?? 15  o/p:-15
value = undefined ?? 15 ?? 25 //o/p:- 15

console.log(value)





