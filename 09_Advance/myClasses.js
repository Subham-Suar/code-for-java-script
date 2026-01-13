// class User{
//     constructor(username,email,password){
//         this.username = username ;
//         this.email = email  ;
//         this.password = password ;

//     }
//       passEnc() {
//         return `${this.password}abc`
//      }
// }

// const chai = new User("chai",'chai@ex.com',123);

// console.log(chai.passEnc());

// function greet(){
//     console.log(this.animal);
// }

// const  obj  ={
//     animal:"cat"
// }

// greet.call(obj)

// const module = {
//   x: 42,
//   getX() {
//     return this.x;
//   },
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // Expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // Expected output: 42


const bindObj ={
    username:"Subham",
    userId:64,
    getx(){
        return  this.username
    }
}

const unboundGetX = bindObj.getx;

console.log(unboundGetX());

const boundGetX = unboundGetX.bind(bindObj)

console.log(boundGetX());

