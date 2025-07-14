// blocking / syncronouse programming / single threaded


function message(){
    for(let i=0; i<10000000000; i++){}
    console.log("Hello second")
}


// first()
// second()
// third()


function first(){
    console.log("Hello first")
}


function second(){
    setTimeout(function(){
        console.log("Hello second")
    }, 1000)
}


function third(){
    console.log("Hello third")
}


function fourth(){
    setTimeout(function(){
        console.log("Hello fourth")
    }, 4000)
}


function fifth(){
    console.log("Hello fifth")
}


function sixth(){
    setTimeout(function(){
        console.log("Hello sixth")
    }, 2000)
}


function seventh(){
    console.log("Hello seventh")
}


function eighth(){
    console.log("Hello eighth")
}


first()
second() //
third()
fourth() // 
fifth()
sixth() //
seventh()
eighth()