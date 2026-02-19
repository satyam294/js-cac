//An Immediately Invoked Function Expression (IIFE) is a JavaScript function
// that runs as soon as it is defined. It is a design pattern used primarily
// to create a private scope for variables, preventing them from 
// polluting the global namespace!!!!!.

//()()  : (function declaration as expression)(calling the function)

function chai(){
    console.log("DB Connected")
}
chai();  //i wanna run it immdiately after functio creation and dont want the functio
// to use global environment variables

// therefore IIFE

//function call before an IIFE must end with a semicolon
(function(){
    console.log("DB Connected Two")
})();

//unnamed iifi
(() => {
    console.log("Unnamed IIFI")
})();

//named iifi
(function named(){
    console.log("named IIFI")
})();