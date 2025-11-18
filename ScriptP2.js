// const user= {
//     name :"Bob",
//     age:13,
//     section:"Genius"
// }

// //console.log(user);

// // {name} = user ;
// // ({ name } = user);
// // Because parentheses prevent JavaScript from interpreting {} as a block.

// const {name:userName} = user ;
// //console.log(userName);

// const user = {
//   name: "Bob",
//   age: 13
// };

// let { age, ...rest } = user;
// age = 20;

// const newUser = { ...rest, age };

//console.log(newUser);
// { name: "Bob", age: 20 }

const shop ={
    profit:13,
    loss: 16,
    vendor:"Subham"
}

 let {vendor} = shop ;
 //console.log("After destructuring",vendor);
  vendor = "Saswat";
//console.log("After destructuring with rename",vendor);

const newShop = {...sho}
console.log(newShop);

