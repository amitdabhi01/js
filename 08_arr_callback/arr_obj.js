
let std = [
    {
        id: 1,
        name: "Amit",
        email: "amit@gmail.com",
        course: "FSD"
    },
    {
        id: 2,
        name: "Jay",
        email: "jay@gmail.com",
        course: "FSD"
    },
    {
        id: 3,
        name: "Krunal",
        email: "krunal@gmail.com",
        course: "FSD"
    },
    {
        id: 4,
        name: "Sanjay",
        email: "sanjay@gmail.com",
        course: "AI/ML"
    },
    {
        id: 5,
        name: "Yashvi",
        email: "Yashvi@gmail.com",
        course: "UI/UX"
    },
    {
        id: 6,
        name: "Krisha",
        email: "krisha@gmail.com",
        course: "UI/UX"
    },
]

// console.log(std)

// for(let i=0; i<std.length; i++){
//     console.log(std[i].name)
// }

// std.forEach((ele) => console.log(ele.name))

// std.forEach((ele) => {
//     if(ele.course == "FSD"){
//         console.log(ele)
//     }
// })

// foraech does not return

// std.forEach((ele) => ele.course == "AI/ML" ? console.log(ele.name) : null)




// fsd = std.filter((ele) => ele.course == "UI/UX")

// console.log(fsd)



// let obj = {id:1, name:"yash",}

// obj.age = 22

// obj.loc = "bahvnagar"

// console.log(obj)



std = std.map((ele) => {
    ele.branch = "Bhavnagar"

    if(ele.course == "FSD")
    {
        ele.faculty = "Alishan Shaikh"
    }
    else if(ele.course == "UI/UX")
    {
        ele.faculty = "Chitraparna Benergy"
    }
    else{
        ele.faculty = "Mohit sir"
    }
    return ele
})


console.log(std)