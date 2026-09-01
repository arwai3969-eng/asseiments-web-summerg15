var nameinput = document.getElementById("username");
var emailinput = document.getElementById("useremail");
var divContainer = document.getElementById("divcontainer");
 var myform=document.querySelector('#myform')
var users=[]

myform.addEventListener('submit',(e)=>{

    e.preventDefault()
      var name = nameinput.value;
    var email = emailinput.value;
    if (name == "" || email == "") {
        alert("please enter your name and email");
        return;
    }
    })


var div=document.createElement('div')

 div.classList.add("alert", "alert-primary", "mt-3");


var username =document.createElement('h3')
username.innerText = username


var useremail =document.createElement('h4')
useremail.innerText = useremail;




div.appendChild(username)
div.appendChild(useremail)


var divcontainer=document.getElementById('divcontainer')
divcontainer.appendChild(div)

 nameinput.value = "";
emailinput.value = ""

