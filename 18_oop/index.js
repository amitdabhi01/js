
class Big{

    constructor(name, age, role){
        this.name = name
        this.age = age
        this.role = role
    }

    updateProfile(name){
        this.name = name
    }
    
    getProfile(){
        console.log("Name:" + this.name)
        console.log("Age:" + this.age)
        console.log("Role:" + this.role)
    }
}


class Small extends Big{

    constructor(){
        super()
        this.course = "FSD"
        this.duration = 15
    }

    getAlldetails(){
        console.log("Course:" + this.course)
        console.log("Duration" + this.duration)
    }

    updateProfile(course){
        this.course = course
    }

    getAlldetails(time, batch){
        console.log(time, batch)
    }


}


let b1 = new Big("Amit", 19, "FSD")
b1.updateProfile("Krunal")
b1.getProfile()

console.log("----------------------")

let b2 = new Big("Jay", 21, "FSD")
b2.getProfile()

console.log("----------------------")


let s1 = new Small()
s1.getAlldetails()

s1.getAlldetails(20, "FSD3")


console.log(b1)