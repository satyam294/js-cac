// const promiseOne = new Promise(function(resolve, reject){
//     //any async task, whose completion info the promise will hold
//     setTimeout(() => {
//         console.log("async task is complete")
//         //do resolve() after successful completion of the async task
//         //this confirms that the task was successful, and you can proceed 
//         //with promise.then()nfunctionality
//         resolve()
//     }, 1000)
// })

// promiseOne.then(() => {
//     console.log("Promise consumes. Status: Success")
// })

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("async task 2 complete")
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Promise 2 consumed")
// })

// const promisethree = new Promise(function(resolve, reject){
//     //some async task
//     setTimeout(function(){
//         //some task
//         resolve({name:"satyam", email: "Satyam@123"}) //resolve passes the data on successful completion to the then() function
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user)
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({name: "Vartika", email: "vartika@345"})
//         }
//         else{
//             reject('ERROR : someting went wrong')
//         }
//     }, 1000)
// })
// //.then() chaining, value returned by one used in the next, catch() triggered if reject() fires
// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.name
// })
// .then((name) => {
//     console.log(name)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => console.log("finally block: the promise is either resolved or rejected"))

//async await

const promiseFive = new Promise(function(resolve, reject){
    let error = true
    if(!error){
        resolve({name: "123", email: "javascript"})
    }
    else{
        reject('Javascript went wrong')
    }
})

//now if you want to wait for the response of this promise without moving further
// use async await. this will keep the program waiting until some response is achieved

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

//async await: need to handle case when the response is error using try catch

consumePromiseFive()

fetch("https://jsonplaceholder.typicode.com/users")  //fetch() returns a Promise type
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))