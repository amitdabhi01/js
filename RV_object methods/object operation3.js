// creating object using class constructor

class PersonDetails{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

const person = new PersonDetails("amit", 19, "devloper")

console.log("person details: ", person)

// creating one more  object with different values using object literals

const studenDetails = {
    totalStudents : 500,
    exam : "common entrace exam",
    block : "a-f",
}

// now merging two objects into one object

const allDetails = {...person, ...studenDetails}

console.log("allDetails: ", allDetails)

// object length

console.log("allDetails length: ", Object.keys(allDetails).length);