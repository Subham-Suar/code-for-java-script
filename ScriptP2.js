const user= {
    name :"Bob",
    age:13,
    section:"Genius"
}

//console.log(user);

// {name} = user ;
// ({ name } = user);
// Because parentheses prevent JavaScript from interpreting {} as a block.

const {name:userName} = user ;
console.log(userName);

