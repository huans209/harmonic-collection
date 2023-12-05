$( document ).ready(function() {
    console.log( "ready" );
    $(".flexbox1").hover(function(){
        $(".displayartist").children().text(`${$(this).attr('id1')}`)
        console.log("hoverartist")
        $(".displaytrack").children().text(`${$(this).attr('id2')}`)
        console.log("hovertrack")
        $(".displaydash").children().text(`-`)
        console.log("hoverdash")
     });
     $(".flexbox1").children().click(function(){
        $("#flexdot").animate({
            opacity: '1',},2000,function(){
        });
        console.log("hoverbefore")
    })

});