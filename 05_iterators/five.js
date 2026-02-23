//reduce() : (accumulator, current) : just like cumulative sum

//The JavaScript Array.prototype.reduce() method executes a 
// user-supplied "reducer" callback function on each element 
// of an array, resulting in a single output value. 
// This single value can be a number, string, object, or even a new array.

const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc, curr) => {
//     return acc + curr
// }, 0 ) //the initial value of accumulator

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)  //implicit return
//console.log(myTotal)

const shoppingCart = [
    {
        item: "js course",
        price: 999
    },
    {
        item: "cs course",
        price: 9999
    },
    {
        item: "ds course",
        price: 5999
    }
]

//use reduce to find sum 

const totalPrice = shoppingCart.reduce((acc, curr) => acc + curr.price, 0)
console.log(totalPrice)