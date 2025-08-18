// JavaScript find() & findIndex() Method
// This method finds out the first value which passes the user-specified conditions and findIndex() method finds out the first index value which passes the user-specified conditions.

// Example: In this example, we will see the use of the find() and findIndex() methods.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newnum = num.find((ele) => ele > 6)

console.log("finding number greater than six in num", newnum)

// findingIndex

let numFindIndex = num.findIndex((values) => values > 5);

console.log("index of numFindIndex in num is  ", numFindIndex)



