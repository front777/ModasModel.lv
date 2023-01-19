 let pause = document.getElementById("pause");

 $("#pause").toggle(function(){
  $("#last-span").css("display", "none")
  $("#first-span").css("width", "40%")
 $("#vd-mute").trigger('play')
 },
 function(){
    $("#last-span").css("display", "block")
 $("#first-span").css("width", "9%")
  $("#vd-mute").trigger('pause')
 })

 $(".fa-volume-low").toggle(function(){
$("#toggle-hr").toggle(100); 
 $("#vd-mute").prop('muted', true)
 }, 
 function(){
$("#toggle-hr").toggle(0);


 $("#vd-mute").prop('muted', false)
 })


      let slideTop = document.getElementById("AnswersOnQueastions-bl")
      let btnDown = document.getElementById("btn-down");
      let a = 0;
      btnDown.addEventListener("click", function(){
        
      
         slideTop.scrollBy({
        top:slideTop.scrollHeight / 5,
        behavior: "smooth",
        
       
        })
        
         a++;
       
 if(a > 4){
    slideTop.scroll({
        top:0,
        behavior: "smooth",
        
       
      })
      a = 0;
      }


       

      })
      
 
   
   /*1*/
$("#f-pack").toggle(function(){
$("#f-solution").css("display", "block")
$("#f-pack-open").css("transform", "rotate(-180deg)")
}
,
function(){
$("#f-solution").css("display", "none")
$("#f-pack-open").css("transform", "rotate(-0deg)")
}
)

/*2*/

   $("#s-pack").toggle(function(){
$("#s-solution").css("display", "block")
$("#s-pack-open").css("transform", "rotate(-180deg)")
}
,
function(){
$("#s-solution").css("display", "none")
$("#s-pack-open").css("transform", "rotate(-0deg)")
}
)

/*3*/
$("#th-pack").toggle(function(){
$("#th-solution").css("display", "block")
$("#th-pack-open").css("transform", "rotate(-180deg)")
}
,
function(){
$("#th-solution").css("display", "none")
$("#th-pack-open").css("transform", "rotate(-0deg)")
}
)


 /*4*/
$("#fo-pack").toggle(function(){
$("#fo-solution").css("display", "block")
$("#fo-pack-open").css("transform", "rotate(-180deg)")
}
,
function(){
$("#fo-solution").css("display", "none")
$("#fo-pack-open").css("transform", "rotate(-0deg)")
}
)

/*5*/

   $("#fi-pack").toggle(function(){
$("#fi-solution").css("display", "block")
$("#fi-pack-open").css("transform", "rotate(-180deg)")
}
,
function(){
$("#fi-solution").css("display", "none")
$("#fi-pack-open").css("transform", "rotate(-0deg)")
}
)

/*6*/
$("#si-pack").toggle(function(){
$("#si-solution").css("display", "block")
$("#si-pack-open").css("transform", "rotate(-180deg)")
}
,
function(){
$("#si-solution").css("display", "none")
$("#si-pack-open").css("transform", "rotate(-0deg)")
}
)

 let magSlide = document.getElementById("magaz-slide")
setInterval(()=>{
        
       magSlide.scrollBy({
        left:magSlide.scrollWidth / 3.7 ,
        behavior: "smooth",
        
        })


      }, 2000)

      setInterval(()=>{
        
       magSlide.scrollTo({
        left:0,
        behavior: "smooth",
        
        })


      }, 8000)

      $(document).ready(function(){
   $("#main-text-switch").toggle(
 function(){
$(".fa-chevron-down").css("transform", "rotate(180deg)")
 $("#translate-bl").css("display", "block")
},
function(){
$(".fa-chevron-down").css("transform", "rotate(0deg)")
 $("#translate-bl").css("display", "none")
});

      })
       let slideOne = document.getElementById("slide-button");
       let slideTwo = document.getElementById("slide-button-sec");
       let divSlide = document.getElementById("about-family")
       slideOne.addEventListener("click", function(){
       divSlide.scrollBy({
        left:divSlide.scrollWidth / 4.4,
        behavior: "smooth",
        
        })
       })

        slideTwo.addEventListener("click", function(){
       divSlide.scrollBy({
        left:-300,
        behavior: "smooth",
        
        })
       })
 
      let tag = document.getElementById("ad-tagline")
    let slide = document.getElementById("AboutUkraineSittuation");
      setInterval(()=>{
        
       tag.scrollBy({
        left:tag.scrollWidth / 3.6 ,
        behavior: "smooth",
        
        })

 slide.scrollBy({
        left:slide.scrollWidth / 4.9 ,
        behavior: "smooth",
        
        })

      }, 6000)
      setInterval(()=>{
        
       tag.scrollTo({
        left:0,
        behavior: "smooth",
        
        })
 slide.scrollTo({
        left:0,
        behavior: "smooth",
        
        })

      }, 24000)