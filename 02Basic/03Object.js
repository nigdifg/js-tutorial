// singleton
// Object.create

// object literals
const mysym = Symbol("key1")

const JsUser = {
    name : "Anurag",
    age : "21",
    [mysym] : "mysymbolkey1",
    mailId: "maurya1985anurag@gmail.com",
    isLoggedIn: false,
    location : "Ayodha",
    lastLoginDays: ["Monday","Tuesday"]
}


myArr =  ["A","n","u","r","a","g"]
console.log(myArr)
console.log(JsUser.mailId);
console.log(JsUser["mailId"]);
console.log(JsUser.lastLoginDays[1]);

console.log(JsUser[mysym])
console.log(typeof mysym)

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());