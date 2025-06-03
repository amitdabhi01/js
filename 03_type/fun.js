
// function rec(num, name){

//     console.log(name + " got " + num + " Rs ")

//     return{
//         name: name,
//         ruppe: num
//     }

// }

// let name = "amit"
// let num = 300

// console.log(rec(num, name))

function rec(n){

    if(n <= 1){
        return
    }

    console.log(n)
    return n*rec(n-1)
}

console.log(rec(4))