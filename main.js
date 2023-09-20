let username ;
let password ;

document.getElementById("form_btn").onclick = function (){

  username =   document.getElementById("username").value
 password = document.getElementById("password").value


  document.getElementById("user_output").innerHTML ="Name = " + username + "<br> password = " + password;

}
