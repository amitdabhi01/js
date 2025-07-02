
// let num = Math.random()
// // let newNum = num + 1;
// console.log(num*1000)

// let n = 2.4;

// console.log(n)
// let n1 = Math.floor(n)
// let n2 = Math.ceil(n)
// console.log(n1)
// console.log(n2)

// let x = 4.6;

// console.log(Math.round(x))



// let otp = Math.round(Math.random()*10000) ;

// console.log(otp)

// let date = new Date()
// console.log(date)
// console.log(date.getDay())

// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())

// console.log(((((Date.now()/1000)/60)/60)/24)/365)

// let d = Date.now()
// let da = date.toDateString()
// console.log(da)

let alert  = document.querySelector(".alert")
let time  = document.querySelector("#time")
let aud  = document.querySelector("#aud")

 function start(){
    setTimeout(fun, time.value*1000)
   
}


function fun(){
    alert.style.display = "none"
    console.log("time ended") 
    aud.play()
}