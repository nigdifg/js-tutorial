const userFunction = {
    username: "Anurag",
    price: 999,
    greetMsg: function(){
        console.log(`${this.username},welcomne to website!`);
        console.log(this);
    }
}

// console.log(userFunction.username);
// userFunction.username = "MAurya"
// console.log(userFunction.username);
// userFunction.greetMsg();

// console.log(userFunction.greetMsg());

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Anurag"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Anurag"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "ANurag"
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
