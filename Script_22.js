 function one (){
    const userName = "Subham"

    function two(){
        const website = "you-tube.com"
        //console.log(userName);
    }
  //console.log(website)

    two()
 }

 one()



 if(true){
    const username ="Krishna"
    if(username === "krishna"){
        const website = "you-tube"
        //console.log(username+website)
    }
    //console.log(website);
 }

 //console.log(username);

console.log(addOne(5)) // before declaration it executes 

 function addOne(num){
    return num+1
 }

addTwo(5)  //  but showing error  you can not use before declaration

 function addTwo(num){
    return num+2
 }