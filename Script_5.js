"use strict"; // treat all JS code as newer version 

//alert(3+3) //WE are using node js not browser 

let name = "Subham" // string type
let age =19 // integer type


// number => 2 to power 53
//bigint
//boolean => true/ false 
// null => standalone value
//undefined
//symbol =>unique


const arr1 = [2,3,4,5]

for(const i of arr1){
  //console.log(i);
  
}

const  myObj ={
    js:"java Script",
    py:"python"
}

for(const key in myObj){
   //console.log(myObj[key]);
    
}


//splice method in js 

let myArr =["phy",'chem','it']
myArr.splice(1,1,'bio','odia')
//console.log(myArr);

//slice method in js

const slicedArr = myArr.slice(2,4);
//console.log(slicedArr);
//console.log(slicedArr.reverse());
//console.log(slicedArr.toString());

//let string ='Subham'
//console.log(string.indexOf("u"));
 
let str = "JavaScript is fun. JavaScript is powerful";
// console.log(str.lastIndexOf("JavaScript", 23));
// console.log(str.lastIndexOf("JavaScript", 24));
// console.log(str.replace("JavaScript","Java"));
// console.log(str.replaceAll("JavaScript","Java"));
// console.log(str.slice(0,10));
//console.log(str.split(" ")); //returns an array which contain string value 




const arr = ['subham' ,'Sudhanshu' ,'Romyajit' ,'Rajesh'] ;

//arr.forEach((item)=>{
  //console.log(item);                  //o/p:- //subham
                                      // Sudhanshu
                                      // Romyajit
                                      // Rajesh
  
//  


arr.forEach((item,index,arry)=>{
     // console.log(item ,index ,arr);
      
})


const arrObj =[
    {
        languageName:"javaScript",
        languageFilename:"js"
    },{
        languageName:"java",
        languageFilename:"js"
    },{
        languageName:"python",
        languageFilename:"js"
    }
]

arrObj.forEach((item,index,array)=>{
  console.log(item,index,array);
})