//Primitive // pass by value
// 7 Types: String, number, boolean, null, underfined, symbol(makes an element unique), bigint

const score = 100
const scoreValue = 100.36
const isLoggedIn = false;
const outsideTemp = null

let username;

const id = Symbol("123")
const anotherId = Symbol("123")
//console.log(id == anotherId)  //false(althugh same value) symbol wraps them uniquely

const bigNumber = 1000210002100212012n  // n at the end declares is as bignumber


// Non - primitive // pass by reference
// arrays, objects, functions

const heros = ["Satyam", "Ironman", 123]  //array any data type can be stored

let myObj = {           //obj declaration
    name: "Satyam",
    year: 3,
    program: "Btech"
}

const myFunction = function(a, b){
    console.log(a + b)
}

myFunction(2, 3)

console.log(typeof(outsideTemp))  //null has the object type

//look at the type of all data types
//apart from null, all have pretty straight forward types
//all non premitive data types have "object" type
// functions have "function" type
// bigNumber has "bigint" type