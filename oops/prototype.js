// let myName = "Anurag     "
// console.log(myName.length);
// console.log(myName.trim().length);

let myHero = ['Thor','spyderman']
// console.log(myHero);

let heroPower = {
    thor: "Hammer",
    spyderman: "sling",

    getSpydermanpower: function(){
        console.log(`spiderman's power is: ${this.spyderman}`);
    }
}

Object.prototype.Anurag = function(){
    console.log(`Anurag is present in all objects`);
}

Array.prototype.heyAnurag = function(){
    console.log(`Anurag says hello`);
}

// heroPower.Anurag()
// myHero.Anurag()
// myHero.heyAnurag()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode in javascript! tutorial  lecture!  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherUsername.trueLength()
"Anurag".trueLength()
"iceTea".trueLength()
