function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email.value))
  {
    let email = document.getElementById("email").value;
    console.log(email)
    document.getElementById("sent").innerHTML = email;
    document.getElementById("message").removeAttribute("hidden");
    document.getElementById("main").setAttribute("hidden", "hidden");;
    
  }
    document.getElementById("email").style.backgroundColor = "hsl(4, 100%, 97%)"
    document.getElementById("email").style.color = "red"
    document.getElementById("email").style.borderColor = "red"
    document.getElementById("required").style.visibility = "visible";
    return (false)
}