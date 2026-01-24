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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack and heap

//stack(primitive data types)       |  heap(non primitive data types)
//a copy of the object is passed    |  the object reference is passed
// no change in the original object |  any change is reflected in the original object

let name1 = "Satyam"    //primitive, inititated in stack
let name2 = name1       //name2 is given a copy of name1, not the original object
name2 = "JinPing"       //name2 changed, no effect on name1, as a copy passed
console.log(name1)       
console.log(name2)      //PASS BY VALUE !!!! a copy passed, no change in og

let user1 = {             //object created in heap, reference "user1" in stack
    name: "Satyam",
    number: 112233
}

let user2 = user1          // same object in heap assigned to reference "user2"

user2.number = 123456      //change made to the og object

console.log(user2.number)
console.log(user1.number)   //PASS BY REFERENCE !!!!! shared object, changes og obj

// PRIMITIVE : STACK, PASS BY VALUE
// NON PRIMITIVE : HEAP, PASS BY REFERENCE