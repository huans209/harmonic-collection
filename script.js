$( document ).ready(function() {
    console.log( "ready!" );
    $(".flexbox1").hover(function(){
        $(".displayartist").children().text(`${$(this).attr('title')}`)
        console.log("hover1")
        $(".displaytrack").children().text(`${$(this).attr('id')}`)
        console.log("hover2")
      });

});