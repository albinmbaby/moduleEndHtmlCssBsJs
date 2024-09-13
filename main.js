document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if(username === "admin" && password === "12345"){
        window.location.href = "todolist.html";
    }
    else{
        document.getElementById("errorMsg").innerText="Invalid username and password";
        document.getElementById("username").classList.add("is-invalid");
        document.getElementById("password").classList.add("is-invalid");
    }
});