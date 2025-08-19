// JavaScript find() & findIndex() Method
// This method finds out the first value which passes the user-specified conditions and findIndex() method finds out the first index value which passes the user-specified conditions.

// Example: In this example, we will see the use of the find() and findIndex() methods.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newnum = num.find((ele) => ele > 6)

console.log("finding number greater than six in num", newnum)

// findingIndex

let numFindIndex = num.findIndex((values) => values > 5);

console.log("index of numFindIndex in num is  ", numFindIndex)



// JavaScript slice() & splice() Method
// slice() selects the specified number of elements without affecting the original array elements whereas splice() removes the selected elements from the original array itself.

// Example: In this example, we will see the use of the slice() and splice() methods.

const cars = [
    "BMW",
    "Mercedes",
    "Wolkswagan",
    "Skoda",
    "Toyota",
    "Ford",
    "Tata"
];

// slice()

console.log("cars array op with slice", cars.slice(2, 5))

// splice() can add or remove element in array

console.log("cars array after", cars)

console.log("cars array op with splice adding one more cars in second index op :", cars.splice(2, 0, "MG"))

console.log("cars array after", cars)



// JavaScript some() and every() Method
// The some() method checks the user-specified conditions on some elements of an array (i.e. it checks for a few elements only), whereas every() method checks the user-specified conditions on every element of an array then returns the results in true or false.

// Example: In this example, we will see the use of some() and every() method of arrays.

// some will check if anyone elements satisfied the condition then it return true otherwise false if not condition not satisfied with any element

let nums = [2, 3, 4, 78, 9, 6, 45, 64, 5, 5, 5]

console.log("num greater than 100 is available ?", nums.some((ele) => ele > 100))

// let satisfies the condition op

console.log("num greater than 5 is available ?", nums.some((ele) => ele > 5))



// now every() method will check every element in array if every element satisfies the condition then try otherwise false

console.log("checking every elements that num greater than 5 is available :", nums.every((ele) => ele > 5))

// as you can see in num array there are the elements which are satisfying the condition but not every element satisfying the condition that's why op is false

// now true condition example

console.log("checking every elements that num greater than 1 is available :", nums.every((ele) => ele > 1))

// will return true if every element satisfies the condition