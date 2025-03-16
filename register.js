$(document).ready(function(){
    $("#submit").click(function(){

       const user={
        name:$("#name").val(),
        email:$("#email").val(),
        password:$("#password").val()
       }
       let users = JSON.parse(localStorage.getItem('users'))||[];
       users.push(user);
       localStorage.setItem("users",JSON.stringify(users));

       alert("user register successfully");
       $("#register")[0].reset();
       

        })
    }
    )