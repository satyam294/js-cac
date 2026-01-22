let score = "33"

// console.log(typeof score)
// console.log(typeof(score))

let scoreNumber = Number(score)
// console.log(typeof(scoreNumber))

// "33" => converted to proper number
// any string not parsable("33abc" or "satty") converts to NaN (which has a number type)
// undefined converts to NaN
// null => 0
// tue => 1 / false => 0

let isSafe = 0
let booleanIsSafe = Boolean(isSafe)
// console.log(booleanIsSafe)

// numbers: 0 => false and all other true (-ve, 1,2,3,4, +ve)
// strings: "" => false / "anything" => true

let num = 55
let stringNum = String(num)
// console.log(stringNum)
// console.log(typeof(stringNum))

//convert anything to string

//********** Operations ***************

let str1 = "Hello"
let str2 = " Satyam"
let str = str1 + str2
console.log(str)

console.log("1" + 2)  //12
console.log(1 + "2")  //12
console.log("1" + 1 + 2)  //112 (first string then all added to that string)
console.log(1 + 1 + "2")  //22 (first arithmetic then conversion to string)

console.log(+true) //1 (conversion of one to number)
console.log(+"")  //0 (conversion of false to number)

let num1, num2, num3
num1 = num2 = num3 = 10

let counter = 100
counter++       //read about pre and postfix operators
console.log(counter)
