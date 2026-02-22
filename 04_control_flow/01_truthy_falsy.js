// userMail = "hello"
// if(userMail){
//     console.log("user logged in")
// }else{
//     console.log("not logged in")
// }

//falsy values:

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values:

// "0", 'false', " ", [], {}, function(){}

// const arr = []
// if(arr.length === 0){
//     console.log("empty array")
// }

// const obj = {}
// if(Object.keys(obj).length === 0){
//     console.log("Object empty")
// }

// nullish coalescing Operator (??) : null/ undefined

// lhs ?? rhs : just a safety check for null/undefined
//              if lhs is null or ud, it sets the value of rhs, otherwise lhs only

let val1 = "satyam" ?? "Guest"
let val2 = null ?? "Guest"
console.log(val1, val2) 

//ternary operator
//(condition) ? (if true): (else)

const price = 100
price < 50 ? console.log("discount active"): console.log("og price")