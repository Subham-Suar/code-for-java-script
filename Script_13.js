//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate =new Date(2023 , 0 , 23 , 5 ,3);

// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

let CreatedDate =new Date("01-23-2025");
// console.log(CreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(CreatedDate.getTime());

//another methods like getDay() ,getMonth() ,etc  

  myDate.toLocaleString('default',{
    weekday :"long "
  }) // using this technique we can customize the date format 