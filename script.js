$( document ).ready(function() {
    console.log( "ready" );
    $(".flexbox1").hover(function(){
        $(".displayartist").children().text(`${$(this).attr('id1')}`)
        console.log("hover1")
        $(".displaytrack").children().text(`${$(this).attr('id2')}`)
        console.log("hover2")
      });

});