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
      console.log("clicked")
   })

   $(".hidspbox1").one("mouseenter",function(){
      $(this).toggleClass("spbox1")
      console.log("reveal")
   })
   $(".hidspbox1").hover(function(){
      $(".displayartist").children().text(`${$(this).attr('data-1')}`)
      console.log("sphoverartist")
      $(".displaytrack").children().text(`${$(this).attr('data-2')}`)
      console.log("sphovertrack")
      $(".displaydash").children().text(`-`)
      console.log("sphoverdash")
   });
   $(".hidspbox1").click(function(){
      $(this).toggleClass("spdot")
      console.log("spclicked")
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