//for each loop cant return values or do conditional operations on elements

const myNums = [1, 2, 3, 4 ,5, 6, 7 ,8, 9, 10]

const newNums = myNums.filter((num) => num > 4)  //implicit return in arrow fn.

const newNums1 = myNums.filter((num) => {     //explicit return for {}
    return num > 6
})

// console.log(newNums)
// console.log(newNums1)

//if we insist on using forEach, we will have to make the resultant array in advanced

const newNum2 = []
myNums.forEach((num) =>{
    if(num > 7){
        newNum2.push(num)
    }
})
// console.log(newNum2)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter((book) => book.genre === 'History')

const bookBatch2 = books.filter((book) => { return book.publish >= 2000})
const bookBatch3 = books.filter((book) => { 
    return book.publish >= 1995 && book.genre === 'History'
})
  
  console.log(bookBatch3)