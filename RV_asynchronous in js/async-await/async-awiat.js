// The await keyword is used inside the async function to wait for the asynchronous operation.
// The use of await pauses the async function until the promise returns a result (resolve or reject) value. For example,

// async const fetchData = () =>{} ;  // as you can see you can't use arrow functions direct as async function

// if you want to use that you can use using function expression

// example

const checkPayment = () => {
    return new Promise((resolve, reject) => {
        let payment = true;

        setTimeout(() => {
            if(payment){
                console.log("payment done successfully")
                resolve();
            }   
            else{
                reject("payment failed")
            }
        }, 3000)
    })
}


const checkBalance = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("xxxxx amount available")
            resolve()
        }, 3000);
    })
}


const payment = async () => {
    try{
        await checkPayment()
        console.log("fetching amount balance.....")
        await checkBalance()
    }
    catch (err){
        console.log(error)
    }
    finally{
        console.log("do you want explore more")
    }
}

payment()