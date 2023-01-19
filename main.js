let logo = document.getElementById("logo");
    let ukraine = document.getElementById("flag-ukraine");
    let latvia = document.getElementById("flag-latvia");
    let FirstAnimationScreen = document.getElementById("first-animation-screen");
    let modas =  document.getElementById("Modas-word");
    let model =  document.getElementById("Model-word");
    let explaineTitle = document.getElementById("explaine-title");
    let loading = document.getElementById("loading");
  
    setTimeout(() => 
        {
        logo.style.opacity = 100;
        }, 1000
        )
        setTimeout(() =>
        {
        ukraine.style.transform =  "translateX(100%)";
        
        }, 1200
        )
        setTimeout(() =>
        {
        ukraine.style.transform = "translateX(200%)";
        
        }, 1900
        )
        setTimeout(() =>
        {
        latvia.style.transform = "translateX(0%)";
        
        }, 1900
        )
        setTimeout(() =>
       {
       
            FirstAnimationScreen.style.transform = "translateX(0%)";
            modas.style.transform = "translateX(0%)";
            model.style.transform = "translateX(0%)";
       
        }, 2100
        )
        setTimeout(() =>
        {
           latvia.style.transform = "translateX(200%)";
           explaineTitle.style.opacity = 100;
        }, 3100
        )
        setTimeout(() =>
     {
           loading.style.transform =  "translateX(200%)";
        }, 5000
        )


       document.getElementById("about").addEventListener("click", function(){
         document.getElementById("aboutBlock").scrollIntoView({behavior: "smooth", block: "end"})
        
       })

       document.getElementById("application").addEventListener("click", function(){
         document.getElementById("applicationBlock").scrollIntoView({  block: "start",
         behavior: "smooth"});
       })

        document.getElementById("gallery").addEventListener("click", function(){
       
         document.getElementById("galleryBlock").scrollIntoView({  block: "start",
         behavior: "smooth"});
       })

       document.getElementById("contacts").addEventListener("click", function(){
       
         document.getElementById("contactsBlock").scrollIntoView({  block: "start",
         behavior: "smooth"});
       })
      $(".buy-cl").click(function(){
$("#attention").css("top","-1vh")
      })
      

       
       document.getElementById("accepting").addEventListener("click", function(){
            document.getElementById("attention").style.top = "-100vh";
       })
       