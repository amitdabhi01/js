//  object accessor set method

// example

const studentDetails = {
  name: "amit",
  age: "",

  set studentAge(age) {
    this.age = age;
  },
};

studentDetails.studentAge = 19

console.log("student age", studentDetails.age)