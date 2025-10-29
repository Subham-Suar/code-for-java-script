console.log(null >=0); //o/p:- true
console.log(null == 0) // o/p:- false 
//the reason is that an equality check == and comparison > <  <= work differently 
// comparison convert null to number so null  >=  0 is true null > 0 is false 

console.log(undefined >=0);
console.log(undefined ==0);
//Here covers

// ===  strict check also check the data type 