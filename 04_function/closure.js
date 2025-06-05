//1. local scole
//2. global scope
//3. funtional soope


function big(){
    // lexical envirement

    let num = 10;

    function small(){
        return num;
    }

    return small()
}

let val = big()

console.log(val)