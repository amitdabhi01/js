

let obj = new Object()

obj = {
    title: "Hona",
    model: "Shine",
    milage: 40,
    colours: 4,

    print:function(){
        console.log("title: " + this.title)
        console.log("model: " + this.model)
        console.log("milage: " + this.milage)
        console.log("colours: " + this.colours)
    }
}


let newprint = obj.print.bind(obj)

newprint()



function print(title, model, milage, colours){
    console.log("title: " + title)
    console.log("model: " + model)
    console.log("milage: " + milage)
    console.log("colours: " + colours)
}

print("Hero", "Splender", 45, 4)