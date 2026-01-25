const name = "Satyam"
const grade = "9"
//console.log(name , grade ,"good!") //outdated syntax space in between
//console.log(name + grade + "hello") //no extra space in between

//console.log(`My name is ${name} and my grade is ${grade}`) //interpolated strings

const college = new String("DIT") //direct allocation invokes the object too behind the scenes
//console.log(college[0])
//console.log(college.__proto__)  //string object..... which provides various functions to apply on the string
//console.log(college.length)
//console.log(college.toLowerCase())
//console.log(college.charAt(1))
//console.log(college.indexOf('a')) //returns -1 if not present

const substr = college.substring(0,2);  //cannot accept negative index
//console.log(substr)

const slice = college.slice(-3) //can accept negative values
console.log(slice)

const newName = "   Satyam    "
console.log(newName.trim())  //removes extra whitespaces and \n

const url = "www.satyam/satyam%20chand.com"
console.log(url.replace('%20', '-'))
console.log(url)   //nochange in og string
console.log(url.includes('hello'))
console.log(url.split('/'))  //splits on limiters