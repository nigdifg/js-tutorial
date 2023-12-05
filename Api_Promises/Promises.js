// // Method -1 

// const promiseOne =  new Promise(function(resolve,reject){
//     setTimeout(function () {
//         console.log('Async task is complted!!!!');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
// console.log("promises consumed!!!!");
// })

// -------------------------------------------------------------------------------------------------------

// // Or Method-2

// new Promise(function (resolve,reject){
// setTimeout(function(){
//     console.log("Async task- 2 is completed!");
//     resolve()
// },1000)
// }).then(function(){
//     console.log("Async 2 resolved!");
// })

// -------------------------------------------------------------------------------------------------------


// const Promisethree = new Promise( function(resolve,reject){

//     setTimeout(function(){
//         resolve({username: "anu",email:"anu@example.com"})
//     },1000)
// })
// Promisethree.then(function(user){
//     console.log(user);
// })


// -------------------------------------------------------------------------------------------------------

// const PromiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"Anu",password: "123"})
//         }
//         else{
//             reject('ERORR: Something went wrong')
//         }
//     },1000) 
// })

// PromiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((myusername)=>{
//     console.log(myusername);
// }).catch(function(error){
//     console.log(error);
// }).finally(function (){
//     console.log("finally the promise is either resolved or rejected!");
// })

// -------------------------------------------------------------------------------------------------------

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Anurag_Js",password:"123"})
        }
        else{
            reject('ERORR: Something went wrong')
        }
    },1000) 
});

async function consumePromisFive(){

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromisFive()

