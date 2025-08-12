// && AND --> 2 condition -> true
// || OR  -> 1  condition ->true
// ! NOT -> reverse

// &&
let age = 18

let hasLicence = false

if(age && hasLicence){
    console.log("You can drive")
}

// OR
if(age || hasLicence){
    console.log("you can drive");
}

// NOT
if (!hasLicence) {
  console.log("you can  drive");
}