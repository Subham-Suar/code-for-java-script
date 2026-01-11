// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task done")
//     },100)
//     resolve()
// })

// promiseOne.then(function(){
//     console.log("promise resolved")
//})
// const promiseTwo = new Promise(function(resolve,reject){
//     let error = false;
//     if(!error){
//         resolve({userName:"Subham",status:"logged in"})
//     }else{
//         reject("ERROR! Something Went Wrong");
//     }
// });

//Consume promise

// promiseTwo.then(function(user){
//     console.log(user)
//     return user.userName
// }).then((userName)=>{
//     console.log(userName)
// }).catch((error)=>{
//     console.log(error)
// })

//using Async and await

// async function consumePromiseTwo(){
//     const response = await promiseTwo;
//     console.log(response);
// }

// consumePromiseTwo()

async function getAllUser() {
    try {
        const response = await fetch('https://api.github.com/users/Subham-Suar');
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log("Error !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", error);
    }
}

getAllUser();


// async function fettchEx() {
//     try {
//         const response = await fetch('https://api.github.com/users/Subham-Suar')
//        const data = await response.json()
//         console.log(data)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// fettchEx()