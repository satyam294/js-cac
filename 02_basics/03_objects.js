//singleton obj: only formed when created using constructor, otherwise not singleton
//Object.create()

//object literals (not singleton)
const mySym = Symbol("Key1")
const jsUser = {
    name: "Satyam",    //keys processed as strings =  "name": "Satyam"
    age: 20,
    location: "Fagpur",
    email: "abc@123",
    isLoggedIn: true,
    lastLoginDays:["Mon", "Sat"],
    "full name": "Satyam Chand",   //cant be accessed using object.property notation
    [mySym] : "myKey1"  
}

//ways to access  !!! Very Important
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])   //correct way to access symbol properties/keys

jsUser.email = "satyam@123"
// Object.freeze(jsUser)  //no further changes reflected
// jsUser.email = "112233"   //no changes
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Good Morning")
}
jsUser.greeting2 = function(){
    console.log(`Good Morning ${this.name}`)
}

console.log(jsUser.greeting)  //function reference
jsUser.greeting()           //calling function
jsUser.greeting2()
