//for of
// let arr = [1,2,3,4,5]
// for (const element of arr) {
//     console.log(element)
// }

// const greeting = "Hello World"
// for(const greet of greeting){
//     console.log(greet)
// }

//MAP : key value pairs, unique keys, insertion order preserved
const map = new Map()
map.set("FR", "France")
map.set("IN", "India")
map.set("BR", "Brasil")

//console.log(map)

// for(const [key, val] of map){
//     console.log(key, ":", val)
// }

//for in (objects loop)

const obj = {
    js: "Javascript",
    cpp: "c++",
    java: "Java"
}

for(const key in obj){
    console.log(key, ":", obj[key])
}