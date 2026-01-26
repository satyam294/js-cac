let myDate = new Date()
// console.log(myDate) 
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

let newDate = new Date(2026, 0, 27)   //new Date(2026, 0, 27, 5, 3)... more args
//console.log(newDate.toDateString());

let newDate2  = new Date("01-26-2026") //mm-dd-yyyy
//console.log(newDate2.toDateString());

let myTimeStamp = Date.now()  //create time dtamp in ms from 1 jan 1970
// console.log(myTimeStamp);

// console.log(newDate.getTime())  //time stamp of predefined date for ez comparisons

// console.log(Math.floor(Date.now() / 1000))  // time stamp of current time in s

console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)  //as months start from 0

newDate.toLocaleString('default',{     //we can customize how we want the date to look like
    weekday: 'long'
})