// in setTimeOut the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.

// example

let stop;

const currentTime = () => {
  let dateAndTime = new Date();

  let time = dateAndTime.toLocaleString();

  console.log(time);

  stop  = setTimeout(currentTime, 2000);
}

currentTime();

setTimeout(() => {
  clearTimeout(stop);
  console.log("Timer Stopped");
}, 10000)