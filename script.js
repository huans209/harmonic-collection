$( document ).ready(function() {
    console.log( "ready" );
   $(".flexbox1").hover(function(){
      $(".displayartist").children().text(`${$(this).attr('data-1')}`)
      console.log("hoverartist")
      $(".displaytrack").children().text(`${$(this).attr('data-2')}`)
      console.log("hovertrack")
      $(".displaydash").children().text(`-`)
      console.log("hoverdash")
   });

   $(".flexbox1").click(function(){
      $(this).toggleClass("flexdot")
      console.log("clickbefore")
   })

   $(".buttonpop").hover(function(){
      $(".gradindex").toggleClass("gradpop")
   });
   $(".buttonalt").hover(function(){
      $(".gradindex").toggleClass("gradalt")
   });
   $(".buttonele").hover(function(){
      $(".gradindex").toggleClass("gradele")
   });
   $(".buttonjpop").hover(function(){
      $(".gradindex").toggleClass("gradjpop")
   });
   $(".buttonost").hover(function(){
      $(".gradindex").toggleClass("gradost")
   });

   var chord = $("#chordswell")[0];
   $("#flexbox1").mouseenter (function() {
      chord.play();
   });
   console.log("hoveraudio")
});