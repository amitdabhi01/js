
let click2 = document.getElementById("click2")
console.log(click2)

let click1 = document.getElementsByName("btn")
console.log(click1)

console.log(typeof(click1))


let para = document.getElementsByTagName("p")
console.log("para")

let arr = para

for(let i=0; i<para.length; i++){
    console.log(arr[i])
}

console.log(arr)
// console.log(arr.innertext)


let qcl1 = document.querySelector("#click2")
console.log(qcl1)

let qcl2 = document.querySelector(".btn")
console.log(qcl2)

let qcl3 = document.querySelector("p")
console.log(qcl3.innerText)



let qclAll = document.querySelectorAll("p")

console.log(qclAll)


let dom = document.querySelector(".row")

let con

console.log(dom)
console.log(dom.children)
console.log(dom.children[0])
console.log(dom.children[0].querySelector(".card"))

// let html = {
//     head: {
//         title: {},
//         link: {
//             href:"",
//             rel : "stylesheet"
//         },
//         meta: {
//             name: "viewport",
//             content:"width=device-width, initial-scale=1.0"
//         }
//     },
//     body : {
//         header:{
//         },
//         main:{
//             section:[
//                 {
//                     div:{
//                         classname:"container",
//                         id:"",
//                         h1:{
//                             classs: "",
//                             innerText:"",
//                         },
//                         div:{
//                             classname:"row",
//                             div:[
//                             {
//                                 classname:"col",
//                                 div:{
//                                     classname:"card",

//                                 }
//                             }
//                            ]     
//                         }
//                     }
//                 }
//             ]
//         },
//         footer: {}
//     }
// }



// let event = {
//     id:"event",
//     innerText : "event"

// }






let evt = document.querySelector("#event")

// evt.onclick = hello;

// function hello(){
//     // BOM 
//     window.alert("alert message")
// }

// evt.onclick = function(){
//       window.alert("alert message")
// }

// let body = {
//     style:{
//         background:"yellow"
//     }
//     children:[]
// }

evt.addEventListener("click", function(){
    evt.classList ="btn btn-success"

    document.querySelector("body").style.background="gainsboro";
   let row= document.querySelector(".row").classList += " g-3"
})