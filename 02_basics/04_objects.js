//singleton objects

const tinderUser = new Object() //same as creating an empty object = {}

tinderUser.id = "123abc"
tinderUser.name = "samm"
tinderUser.isLoggedIn = true;

// console.log(tinderUser)

const newUser = {
    email : "abcd",
    fullname : {
        userFullName : {
            firstName: "Satyam",
            lastname: "Chand"
        }
    }
}
//console.log(newUser)
//console.log(newUser.fullname.userFullName.firstName)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
//const obj3 = {obj1, obj2} //nested result
const obj3 = Object.assign(obj1, obj2) //Object.assign(target, sorce): assigns all elements of source to target and also returns a shallow copy of target
const obj4 = Object.assign({}, obj1, obj2) // (target, source1, source2, .....)
// console.log(obj3)  
// console.log(obj1)
// console.log(obj4)

const obj5 = {...obj1, ...obj2};
// console.log(obj5)

//database usually returns an array of objects

const users = [
    {
        id: 1,
        email: "Satyam@123"
    },
    {
        id: 1,
        email: "Satyam@123"
    },
    {
        id: 1,
        email: "Satyam@123"
    },
    {
        id: 1,
        email: "Satyam@123"
    },
    {
        id: 1,
        email: "Satyam@123"
    }
]
// console.log(users[1].email)

// console.log(tinderUser)
//all these functions return arrays for easy iterations
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

//check if a key exists or not
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))  //true
// console.log(tinderUser.hasOwnProperty("isLogged"))   //false

//object destructuring
const course = {
    coursename: "jsInHindi",
    price: "999",
    courseInstructor: "Histesh"
}
course.courseInstructor  //very slow and repetetive
//use destructuring
//const {key: short-name, key2: short-name, .......} from what? object , thus

const {courseInstructor : ins, coursename: name} = course
console.log(ins, name)

//api response and json (javascript object notation)

// {
//     "name": "Satyam",
//     "idno" : 1,
//     "class": 7

// }

// [
//     {},
//     {},
//     {},
//     .
//     .
//     .
//     .
    
// ]
