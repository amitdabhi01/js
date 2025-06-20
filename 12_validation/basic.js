
let arr = [" a", "b", "c", "d"]

let string = "amit"

// console.log(string.includes("a"))

let ans = arr.some((n) => n.toLocaleUpperCase().trim() == "A")

console.log(ans)

// arr.some(function(ele){
//     string.includes(ele)
// })

// arr.some((ele) => string.includes(ele))



// for(let i=0; i<arr.length; i++)
// {
//     for(let j=0; j<str.length; j++)
//     {
//         if(arr[i] == arr[j])
//         {
//             return true;
//         }
//     }
// }

// let newarr = str.split("")
// console.log(newarr)

// let val = newarr.some((n)=> n.toLocaleUpperCase() == n)

// console.log(val)

let newval = str.split("").some((n)=> n.toLocaleUpperCase() == n)
console.log(newval)