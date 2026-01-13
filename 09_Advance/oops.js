function User(username ,userid ,loggedIn){
    this.username =username;
    this.usserid =userid;
    this.loggedIn = loggedIn;

    return this;
}

const userOne = new User("Subham",18,true);
console.log(userOne)

console.log(userOne instanceof User)

//setprototypeOf() in caseof __proto__
//As per morden syntax