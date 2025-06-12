let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// let arr = [1, 2, 3, 4, 5]

// let c = []

// STEP 1
// arr.forEach(cube)

// function cube(n){
//     c.push(n*n*n)
// }

// STEP 2
// arr.forEach(function(n){
//     c.push(n*n*n)
// })

// STEP 3
// arr.forEach((n) => {
//     c.push(n*n*n)
// })

// STEP 4
// arr.forEach((n) => c.push(n*n*n))

// console.log(c)








arr.forEach(prime)

function prime(n){
    if(isprime(n)){
        console.log(n)
    }
}


function isprime(n){
    for(let i=2; i<n; i++)
    {
        if(n%i == 0)
        {
            return false
        }
    }
    return true
}