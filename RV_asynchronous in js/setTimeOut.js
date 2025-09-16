// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

// The commonly used syntax of JavaScript setTimeout is:

// setTimeout(function, milliseconds);
// Its parameters are:

// function - a function containing a block of code
// milliseconds - the time after which the function is executed
// The setTimeout() method returns an intervalID, which is a positive integer.

const greeting = () => {
    console.log("greeting function Output will print hello after 3 seconds")
    setTimeout(() => {
        console.log("namaste duniya")
    }, 3000)
}

greeting()


// another example


const currentYear = () => {
    console.log("checking current year");

    setTimeout(() => {
        let currentYear = new Date().getFullYear();
        console.log("Current Year: ", currentYear)
    }, 3000)
}

currentYear()


// another example


console.log("hello 1")

setTimeout(() => {
    console.log("hello 2")
}, 1000)

console.log("hello 3")

setTimeout(() => {
    console.log("hello 4")
}, 2000)