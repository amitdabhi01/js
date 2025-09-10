// $("document").ready(()=>{
//     $("#btn").click(()=>{
//         $("#img").css({
//             width : "500",
//             height : "400",
//         })
//     })
// })

// using different method 

// function handleClick(){
//     $("#img").css({
//             width : "500",
//             height : "400",
//         })
// }

// $("document").ready(()=> {
//     $("#btn").click(handleClick)
// })

// double click

// $("document").ready(()=>{
//     $("#btn").dblclick(()=>{
//         $("#img").css({
//             width : "500",
//             height : "400",
//         })
//     })
// })

// on mouse enter 

$("document").ready(()=>{
    $("#img").mouseenter(()=>{
        $("#img").css({
            width : "500",
            height : "400",
        })
    })
})

// on mouse leave

$("document").ready(() => {
    $("#img").mouseleave(()=>{
        $("#img").css({
            width : "400",
            height : "300",
        })
    })
})