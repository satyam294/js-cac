// function sayMyName(){
//     console.log("Satyam")
//     console.log("chand")
// }
// sayMyName();

//this function is ambiguous, does not necessarily add two numbers.
//just adds two entries/arguments (numbers, strings, etc.)
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2) 
// }
// addTwoNumbers(2,"a")

// function addTwoNumbers(num1, num2){
//     result = num1 + num2
//     return result
// }
// res = addTwoNumbers(2,3)
// console.log(res)

function userLoginMsg(name = "Sam"){
    return `${name} just logged in`
}

// console.log(userLoginMsg())
// console.log(userLoginMsg("Satyam"))

//for scenario where the the number of arguments is unclear

function calculateCartPrice(val1, val2, ...nums){  //... is rest operator
    console.log(val1)
    console.log(val2)
    console.log(nums)
}

// calculateCartPrice(5,25,2,4,5,19)

function getObj(anyObj){
    console.log(`Name: ${anyObj.name} Price: ${anyObj.price}`)
}
getObj({
    name: "satyam",
    price: 99
})

