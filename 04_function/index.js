
console.log(1 == 1) // check value

console.log(1 == "1")

console.log(1 === "1") // check value + data type

console.log("" == 0)

console.log("false" == "")

console.log({} == {})

console.log([] == [])

let obj = name = "amit"
let obj2 = name = "amit"

console.log(obj.name == obj2.name)


function fun(num){
    return num;
}

let udf1 = fun
let udf2 = fun

console.log(udf1(5))
console.log(udf2(10))