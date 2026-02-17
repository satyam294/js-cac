//this keyword : fetches current context
const user = {
    name: "Satyam",
    price: 99,
    welcomeMsg: function(){
        console.log(`${this.name}, welcome to website`)
    }
}
// user.welcomeMsg()
// user.name = "Sam"
// user.welcomeMsg()


// console.log(this)  //empty object
// function chai(){
//     console.log(this)
// }
// chai()

//arrow function
// () => {}

// const chai = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(chai(2,3))


//way 2: Implicit return (no need to mention the return statement)

//curly braces => need to include return statement
//() paranthesis => no return required

const chai = (num1, num2) => (num1 + num2)
console.log(chai(2,3))

const returnUser = () => ({username: "Satyam"})   //cannot return object without ()
console.log(returnUser())