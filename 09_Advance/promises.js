// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task done")
//     },100)
//     resolve()
// })

// promiseOne.then(function(){
//     console.log("promise resolved")
//})
const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task done")
    },100)
    resolve({userName:"Hitesh", userMail:"Subham@ex.com"});
});

promiseTwo.then(function(user){
    console.log(user);
})