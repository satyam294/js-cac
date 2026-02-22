//for each loop: a higher order loop. like a property of each array

const coding = ["Java", "Cpp", "Swift", "Go"]

// coding.forEach(function(item){
//     console.log(item)
// })

// coding.forEach((item) => {console.log(item)})


// //it gets three values in each iteration
// coding.forEach((item, index, arr) => {console.log(item, index, arr)})

//array of objects

const objects = [
    {
        name: "Python",
        extension : "py"
    },
    {
        name: "Java",
        extension : "class"
    },
    {
        name: "cpp",
        extension : "exe"
    }
]

objects.forEach((item) => {
    console.log(item.extension)
})