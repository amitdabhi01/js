// Classes also allows you to use getters and setters.

// It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

// To add getters and setters in the class, use the get and set keywords.

class Car{
    constructor(brand, name, year){
        this.brand = brand;
        this.name = name;
        this.year = year;
    }

    get carManufacturedYear(){
        return this.year;
    }
}

const car1 = new Car("BMW", "M5", 2023)

console.log("Car details: " + " i have " + car1.brand + " " + "and model is " + car1.name + " " + "which is manifuctured in " + car1.carManufacturedYear)