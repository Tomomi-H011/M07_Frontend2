let token;

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#loginBtn").addEventListener("click", async function(){
        const username = document.querySelector("#username").value; // Grab the values from the input fields
        const password = document.querySelector("#password").value;
        login(username, password);
    })
});

async function login(username, password){
    const login_cred = {
        username,
        password
    }

    //Send the login post request to the backend
    const response = await fetch("https://grove-numerous-weeder.glitch.me/api/auth/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(login_cred)
    })
    
    if(response.ok){
        //take the token and save it to the local storage
        const tokenResponse = await response.json(); //reive the token from the response
        token = tokenResponse.token; //save the token to the token variable
        uname = tokenResponse.username2; //save the username to the uname variable
        auth = tokenResponse.auth; //save the auth token to the auth variable
        console.log(token);

        // save the token to the local storage
        localStorage.setItem("token", token);
        localStorage.setItem("uname", uname);
        localStorage.setItem("auth", auth);
        //redirect the user to the home page
        window.location.replace("index.html");
    }
    else{
        document.querySelector("#error").innerHTML = "Bad username and password"; //Insert the error message to the div with the id "error"
    }

}