
window.onload = function(){
    document.querySelector("#registerBtn").addEventListener("click", async function(){
        const username = document.querySelector("#username").value; // Grab the values from the input fields
        const password = document.querySelector("#password").value;
        const status = document.querySelector("#status").value;
        registerUser(username, password, status);
    })
};

async function registerUser(username, password, status){
    const user = {
        username,
        password,
        status
    }

    //Send the login post request to the backend
    const response = await fetch("https://grove-numerous-weeder.glitch.me/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    
    if(response.ok){
        //take the token and save it to the local storage
        alert("User registered successfully");
        window.location.replace("login.html");
    }
    else{
        document.querySelector("#errorMsg").innerHTML = "Missing username and/or password"; //Insert the error message to the div with the id "error"
    }

}