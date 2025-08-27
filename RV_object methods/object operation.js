// accessing object properties

let personalDetails = {
    name : "amit",
    age : 19,
    job : "devloper",
}

console.log("personDetails: ", personalDetails);

// now accessing the values of personDetails object using . notation

console.log("person name: ", personalDetails.name)

// now accessing the values of personDetails object using []

console.log("person job: ", personalDetails.job)

//  Modifying Object Properties using . notation we can modify using brackets too,

personalDetails.age = 20

// using brackets notation

personalDetails["age"] = 20;

console.log("person age: ", personalDetails.age)

//  Adding Properties to an Object using brackets notation too.

personalDetails.email = "amit123@gmail.com"

console.log("person details object  with all changes:", personalDetails);

// adding properties to an Object using brackets notation