// ‘A JavaScript String is a sequence of characters, typically used to represent text.

// we can write our string using '', and "" quote

// example

let name = "amit"

//  strings methods example

let text = "hello amit"

console.log("Text" + text)

// charAt() method  ==> returns the character at specified index(position) counting from zero

console.log("car at:" + text.charAt(6))

// concat() method ==> returns two or more joint strings

console.log("joined string" + text.concat("Good morning"))

// endsWith() method ==> returns true if the string ends with a specified value

console.log("end with" + text.endsWith("t"))

// includes() method ==> returns true if the string contains a specified value

console.log("includes  a character in text variable ? :" + text.includes("a"))

// indexOf() method ==> returns the index(position) of the first occurrence of a value in string

console.log("index of: " + text.indexOf("amit"))

console.log("index of (not available will show) :" + text.indexOf("dabhi"))

// lastIndexOf() method ==> returns the last occurrence of a value in string

console.log("lastIndex :" + text.lastIndexOf("amit"));

// length returns the length of the string

console.log("length of string :" + text.length);