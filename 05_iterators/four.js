// map() is same as forEach, but it returns the values and can be used in
// chaining because it does not return undefined unlike forEach

// map()/ forEach() : to get to each element to perform some operations
// filter(): select elements that fulfil some requirements
//filter(() => (condition)) : returns all elements that fulfil that condition

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((num) => num+10)
// console.log(newNums)

//+++++++++ chaining using map() ++++++++++++++++++

const chainNums = myNums.map((num)=> num * 10).map((num) => num + 1)
//console.log(chainNums)

const chainNums1 = myNums.map((num)=> num * 10).map((num) => num + 1).filter((num) => num%3 === 0)
console.log(chainNums1)
