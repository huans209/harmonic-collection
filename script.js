$( document ).ready(function() {
    console.log( "ready" )

   $(".flexbox1").hover(function(){
      $(".displayartist").children().text(`${$(this).attr('data-1')}`)
      console.log("hoverartist")
      $(".displaytrack").children().text(`${$(this).attr('data-2')}`)
      console.log("hovertrack")
      $(".displaydash").children().text(`-`)
      console.log("hoverdash")
      // var x = document.getElementsByClassName($(".flexbox1").attr('data-3')); 
      // function playAudio(){
      //    x.play();
      //    console.log("playingsound")
      // }
      // playAudio();
   });

   // var x = document.getElementsByClassName($(".flexbox1").attr('data-3')); 
   // x.preload = 'auto';
   // x.onloadeddata = function () {
   // }; 
   // x.play();

   $(".flexbox1").bind("click",function(){
      $(this).toggleClass("flexdot")
      console.log("clicked")
      $(this).unbind("click")
   })

   let counterDisplayElem = document.querySelector('.displaycount');
   counter= 0
   $(".hidspbox1").one("mouseenter",()=>{
      console.log("revealbox")
      counter++;
      counterDisplayElem.innerHTML = (counter + "/153")
   })

   // counter=0
   // $(".displaycount").one("mouseenter",()=>{
   //    counter=num("spbox1")
   //    console.log("revealcounter")
   // })
   // $(".displaycount").text(`${(counter)}/152`)

   // let counts = num(spbox1);
   // function updated() {
   //     let count = document.getElementById("counter");
   //     count.innerHTML = counter++;
   // }

   $(".hidspbox1").one("mouseenter",function(){
      $(this).toggleClass("spbox1")
   })
   $(".hidspbox1").hover(function(){
      $(".displayartist").children().text(`${$(this).attr('data-1')}`)
      console.log("sphoverartist")
      $(".displaytrack").children().text(`${$(this).attr('data-2')}`)
      console.log("sphovertrack")
      $(".displaydash").children().text(`-`)
      console.log()
   });
   $(".hidspbox1").bind("click",function(){
      $(this).toggleClass("spdot")
      console.log("spclicked")
      $(this).unbind("click")
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

   // var chord = $("#chordswell")[0];
   // $("#flexbox1").mouseenter (function() {
   //    chord.play();
   // });
   // console.log("hoveraudio")
   // });

   // var x = document.getElementById("chordswell"); 

   // function playAudio(){
   //    x.play();
   // }
})