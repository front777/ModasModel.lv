
  document.getElementById("SendInf").addEventListener("click", function(e){

   
     let Mail = document.getElementById("Mail").value;
  let Phone = document.getElementById("Phone").value;
  let Name = document.getElementById("Name").value;

  if(Mail == 0 || Phone == 0 || Name == 0){
alert("form not full write ");
  }

  
  else{
document.getElementById("forms-bl").action = "/DoneMailEng.html"
Email.send({
   Host : "smtp.elasticemail.com",
    Username : "modelmodas5@gmail.com",
    Password : "FB463800A105E43B0EB0AD3063F753863557",
    To : "georgezvin@gmail.com",
    From : "modelmodas5@gmail.com",
    Subject : "Контакты из сайта ",
    Body : "Имя: " + Name + "<br>Телефон: " + Phone + "<br>Имеил: " + Mail
    
  
  })
  }

  })