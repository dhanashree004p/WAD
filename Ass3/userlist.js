$(document).ready(function(){
    let users=JSON.parse(localStorage.getItem('users'))|| [];
    let userList=$("#userlist");
    
    if(users.length===0)
        {
            alert("no users found");

        }
else{
    users.forEach(user=> {
        userList.append(`<li> name : ${user.name} Email: ${user.email} password: ${user.password}</li>`);
    });
}
})
