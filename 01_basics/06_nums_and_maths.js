const score = 400
const balance = new Number(500.3944)  //can use prototype functions on this object
//console.log(score)
//console.log(balance)  //explicit type shown in console

//console.log(balance.toString().length)
//console.log(balance.toFixed(2))   //digits after decimal point, no round off

//console.log(balance.toPrecision(4)) //500.4, (1-21) arg, rounds off, returns string

const num = 1000000;
//console.log(num.toLocaleString())  //eng number scale represnetaion 1,000,000
//console.log(num.toLocaleString('en-IN'))  //indian version 10,00,000

Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.MAX_VALUE
Number.MIN_VALUE

//++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++
//console.log(Math)
//console.log(Math.abs(-5))
//console.log(Math.round(4.6)) 
Math.ceil(4.1)
Math.floor(4.1)
Math.sqrt(25)
Math.max(1,2,3,4)

console.log(Math.random())   //0.0 and 1.0 (excluding 1)
console.log(Math.floor((Math.random() * 10)) + 1)  //bw 1 and 10 [(max - min + 1) + min]

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//random values in a range