//console.log(5 > 5) //and all other numeric comparisons over all operators

console.log("2" > 1)
console.log("02" > 1) //unpredictable outputs, not recommended

console.log(null == 0) //false
console.log(null > 0)  //false
console.log(null >= 0)  //true
//why????? comparisons(>, >=, <, <=) and equality(==) work differently 
//comparisons convert null to number(0) but == does not
//undefined gives false in all cases as it isnt converted to a number

console.log(2 == "2")  //converts both to number and checks //true
console.log(2 === "2") //strict check => stops conversion, checks absolutely //false