var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30     //accessible outside the scope, also modifies out of scope values
}

// console.log(a)   //not allowed, out of scope
// console.log(b)   //not allowed
//console.log(c)   //accessible yet it is out of scope. Thus avoid var

function one(){
    const username = "satyam"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    //console.log(website)
    two()
}

//one()

//++++++++++++++++++++ Interesting +++++++++++++++++++++

//HOISTING

// Hoisting is a JavaScript mechanism where the interpreter appears
// to move the declarations of functions, variables, and classes
// to the top of their scope during the compilation phase, 
// before the code is executed. 

//This means you can use a function or a variable before it is declared in the code, 
// though the behavior varies depending on how they are declared. 


console.log(addone(5))   //function can be used before declaration for d1
//declaration 1 , d1
function addone(num){    //hoisted
    return num + 1
}


//console.log(addtwo(5))    //function cannot be used before declaration for d2

//declaration 2, d2
const addtwo = function(num){     //not hoisted
    return num + 2
}

console.log(addtwo(5))

