$("document").ready(() => {
    $("#hide").click(() => {
        $("#img").hide()
    });

    $("#show").click(() => {
        $("#img").show()
    });

    $("#toggle").click(() => {
        $("#img").toggle()
    });

    // fade effects

    $("#fadeIn").click(() => {
        $("#img").fadeIn(2000);
    });

    $("#fadeOut").click(() => {
        $("#img").fadeOut(2000);
    });

    $("#fadeToggle").click(() => {
        $("#img").fadeToggle(2000);
    });

    // slide effects

    $("#slideUp").click(()=>{
        $("img").slideUp(2000)
    });

    $("#slideDown").click(()=>{
        $("img").slideDown(2000)
    });

    $("#slideToggle").click(()=>{
        $("img").slideToggle(2000)
    });

    $("#stop").click(()=>{
        $("img").stop()
    });
})