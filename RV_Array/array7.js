// JavaScript indexOf() Method
// This method is used to find the index of a particular element in an array.

// Example: In this example, we will find out the index of the elements using the indexOf() method.

const cars = [
    "BMW",
    "Mercedes",
    "Wolkswagan",
    "Skoda",
    "Toyota",
    "Ford",
    "Tata"
];

console.log("i want to find the index of Skoda and index is :", cars.indexOf("Skoda"))
// counting from zero



// JavaScript includes() Method
// This method is used to check whether the array contains the specified element or not.

// Example: In this example, we will check whether the array contains the element or not using the includes() method.

console.log("i want to find the Ford is available in fruit array and the answer is :", cars.includes("Ford"))

// now i want to check Mahindra is available in fruit array or not :

console.log("i want to find the Mahindra is available in fruit array and the answer is :", cars.includes("Mahindra"))




//  JavaScript sort() Method
// This method sorts the elements of an array in alphabetical order in ascending order.

// Example: In this example, we will sort the array alphabetically using the sort() method.

let alphabet = ["x", "a", "v", "c", "m", "d"]

console.log("sort the alphabet array : ", alphabet.sort())

// now what if we want to sort number data types values

let num = [1, 3, 5, 67, 2, 49];

console.log("sorting number array in ascending order : ", num.sort((a, b) => a - b))

// now in descending order

console.log("sorting number array in descending order : ", num.sort((a, b) => b - a))