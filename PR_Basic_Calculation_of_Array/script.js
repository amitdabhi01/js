  let arr = [];

    function setArray() {
      let input = document.getElementById("arrayInput").value;
      arr = input.split(",").map(Number); 
      updateDisplay();
      showOutput("Array set: " + arr);
      arrayInput.value = ""
    }

    function getInputValue(){
      return Number(document.getElementById("singleValue").value);
    }

    function updateDisplay(){
      document.getElementById("arrayDisplay").innerText = "[" + arr.join(", ") + "]";
    }

    function showOutput(msg){
      document.getElementById("output").innerText = msg;
    }

    function pushItem(){
      let val = getInputValue();
      arr.push(val);
      updateDisplay();
    }

    function popItem(){
      arr.pop();
      updateDisplay();
    }

    function shiftItem(){
      arr.shift();
      updateDisplay();
    }

    function unshiftItem(){
      let val = getInputValue();
      arr.unshift(val);
      updateDisplay();
    }

    function spliceItem(){
      arr.splice(1, 1);
      updateDisplay();
    }

    function mapTriple(){
      let result = arr.map(x => x * 3);
      showOutput("Doubled: " + result);
    }

    function filterEven(){
      let result = arr.filter(x => x % 2 === 0);
      showOutput("Even Numbers: " + result);
    }

    function checkIncludes(){
      let result = arr.includes(5);
      showOutput("Includes 5? " + result);
    }

    function findIndex1(){
      let result = arr.findIndex(x => x > 1);
      showOutput("First index > 1: " + result);
    }

    function everyPositive(){
      let result = arr.every(x => x > 0);
      showOutput("Every item > 0? " + result);
    }

    function someGreaterThan5(){
      let result = arr.some(x => x > 5);
      showOutput("Any item > 5? " + result);
    }