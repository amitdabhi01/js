// methods with parameters

// we can use methods with parameter in class objects

class Person{
    constructor(name, age){
        this,name = name;
        this.age = age;
    }

    job(jobName){
        return jobName;
    }
}

const person1 = new Person("john", 30)

// person details

console.log("person details: ", "my name is ", person1.name + " ", "my age is ", person1.age + " " + "i am working as a " + person1.job("software engineer"))

// here job is  method in our Person class object

// and we are passing our parameters in method and accessing that

// another example

class BikeDetails {
    constructor(brand, name, year){
        this.brand = brand;
        this.name = name;
        this.year = year;
    }

    bikeYear(year){
        return this.year - year;
    }
}

const bike1 = new BikeDetails("kawasaki", "ninja", 2025)


console.log("bike full details: ", "bike brand is " + bike1.brand + " " + "and bike name is " + bike1.name + " " + "and my bike is " + bike1.bikeYear(2020) + " " + "year old")