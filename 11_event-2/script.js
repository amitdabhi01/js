function message(){
    window.alert("Login seccessful")

    window.location.href="https://github.com/amitdabhi01"
}

let popup = document.querySelector("#popup")
let input = document.querySelector("#input")

popup.addEventListener("click", function(){
    window.alert("Hello word....!")
})


let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")
let passkey = document.querySelector("#passkey")



submit.addEventListener("click", function(){
    if(email.value != "amit@gmail.com" && password.vlaue != "amit123"){
        window.alert("⚠️ wrong crediantial...!")
        email.classlist += "border border-danger"
        password.classList += "border border-danger"
    }
    else if(email.value != "amit@gmail.com"){
        window.alert("📧 wrong email....!")
        email.classlist += "border border-danger"
    }
    else if(password.value != "amit123"){
        window.alert("🔑 wrong password")
        password.classList += "border border-danger"
    }
    else{
        window.alert("✅ login successfully......!")
        window.location.href="https://www.amazon.in"
    }
})

passkey.onclick = function(){
    if(password.type == "password")
    {
        passkey.children[0].className = " bi bi-eye-slash"
        password.type = "text"
    }
    else{
        password.type = "password"
        passkey.children[0].className =" bi bi-eye"
    }
}