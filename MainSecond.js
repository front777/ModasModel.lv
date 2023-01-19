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