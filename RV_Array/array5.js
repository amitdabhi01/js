// array join() method

// this join method creates and return a new string by concatenating all elements of an array. it uses a specefied separator between each element in the resulting string 

const cars = [
    "BMW",
    "Mercedes",
    "Wolkswagan",
    "Skoda",
    "Toyota",
    "Ford",
    "Tata"
];

console.log("return a new string with each cars element: ", cars.join(" "))



// JavaScript Array flat() Method
// The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 0]
];

console.log("flattened number Array: ", array.flat());



// another example with more flatted array

const number = [1, 2, [3, 4], [5, 6], [7, 8, 9]];

console.log("flattened number Array: ", number.flat())



// JavaScript Array.slice() Method
// The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments

console.log("cars elements", cars)

console.log("slicing cars array", cars.slice(1, 3))