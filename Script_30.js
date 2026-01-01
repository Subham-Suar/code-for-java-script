const myNum =[4,5,6,7,8,9,10]

//Using filter() method ===========
// const newNum = myNum.filter((item)=>{
//     return item >4
// })

// console.log(newNum)


// using foreach()======

const newNum = []

myNum.forEach((item)=>{
    if(item >4){
        newNum.push(item)
    }
})

console.log(newNum);