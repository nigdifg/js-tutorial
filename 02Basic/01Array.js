const myArry1 = [1,2,3,4,5]
console.log(myArry1);

const myArry = new Array(2,4,1,4,5)
console.log(myArry);

let joinedArr =  myArry1.join();
console.log(joinedArr);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice VS splice

console.log("A ", myArry);
const myn1 = myArry.slice(1, 3)

console.log(myn1);
console.log("B ", myArry);

const myn2 = myArry.splice(1, 3)
console.log("C ", myArry);
console.log(myn2);