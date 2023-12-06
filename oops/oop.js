const user ={
    username: "Anurag",
    loginCount : 8,
    signedIn:true,
    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.loginCount);
console.log(user.signedIn);
console.log(user.getUserDetails());
function User(username,loginCount,isloggedin){
    this.username =username;
    this.loginCount = loginCount;
    this.isloggedin = isloggedin;

    this.greeting = function(){
        console.log(`Welcomr ${this.username}`);
    }
    return this
}
const userOne = new User("Anurag",12,true)
const userTwo = new User("ChaiAurCode",11,false)
console.log(userOne.constructor);
console.log(userTwo.constructor);