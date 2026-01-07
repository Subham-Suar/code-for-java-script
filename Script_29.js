// // const arr = [ 1,2,3,4]

// // for(const iterator of arr){
// //    /// console.log(`the value of arr ${iterator}`)
// // }


// const map = new map();
//     map.set('IN','INDIA')
//     map.set('USA','AMERICA')
//     // map.set('IN','INDIA')

//     // for(const key in map){
//     //     console.log(key)
//     // }

// //     for (const [key , value] of map){
// //         console.log(key);
// //         console.log(value);
// //     }
const myObj = {
    js:"javaScript",
    py:"Python",
    cpp:"C plus plus"
}
//console.log(myObj)
for(const key in myObj){
    console.log(myObj[key])
}
// // console.log(myObj);
// // console.log(myObj.key);


// for(const key in myObj){
//     //console.log(key);
//     //console.log(myObj[key]);
// }

const arr = ['subham' ,'Sudhanshu' ,'Romyajit' ,'Rajesh'] ;

// arr.forEach(function(val){
//  console.log(val)
// })
arr.forEach((value)=>{
    //console.log(val)
})

arr.forEach((item ,index ,array)=>{
    //console.log(item , index , array)
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

arrObj.forEach((item)=>{
    //console.log(item.languageName)
})