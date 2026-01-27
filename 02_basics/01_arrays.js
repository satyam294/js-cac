//arrays are resizable here
const myArr = [0, 1, 2, 3, 4, 5]
const arr2 = ["satyam", "chand"]
const arr3 = new Array(1,2,3,4)
// console.log(myArr[2])

// array methods

const arr = [1,2,3,4,5,6]
// arr.push(5)
// arr.push(6)
// arr.pop()
// arr.unshift(9)  //adds element to the start of the array
// arr.shift()  //removes element from the start of the arr
// console.log(arr.includes(9))
// console.log(arr.indexOf(4))
const newArr = arr.join()   //converts an array into a string(comma separated)
// console.log(arr)
// console.log(newArr)

//      slice        ,                               splice
// return a copy of a range of          return a copy of a range
//    an array                         (including the upper bound) 
//                                     and removes that from the og array

console.log("og", arr)

const na1 = arr.slice(1, 4)
console.log("slice", na1)
console.log("og", arr)

const na2 = arr.splice(1, 4)
console.log("splice", na2)
console.log("og", arr)

