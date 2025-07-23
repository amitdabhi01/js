
const display = document.querySelector("#display")

function append(e){
    display.value += e
}

function clearDisplay(){
    display.value = " "
}

function deleteEle(){
    if(display.value > 0){
       display.value = display.value.slice(0, -1)
    }
}

function calculate(){
    display.value = eval(display.value)
}

function percentage(){
    display.value = display.value / 100
}