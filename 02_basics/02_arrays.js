const arr = ["hello", "sir"]
const arr1 = ["car", "plane"]
//arr.push(arr1)   //array inside array

//console.log(arr)

const arr2 = arr.concat(arr1)  //adds arr1 in arr and returns a new arr
// console.log(arr2)  

const combined_arr = [...arr, ...arr1, ...arr2] //spread operator, adds all elements to the new array
//console.log(combined_arr)

const bad_array = [1,2,3,[4,5,6], 7,8, [8,9,[1,2,4]]]
const good_array = bad_array.flat(Infinity)  //arg:depth, how many arrays you want to flatten
//console.log(good_array)

console.log(Array.isArray("satyam"))
console.log(Array.from("satyam"))
console.log(Array.from({name:"satyam"})) //specify which to convert to array, key or value


let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1, s2, s3))