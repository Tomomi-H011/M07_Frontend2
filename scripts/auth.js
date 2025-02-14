class Auth{
    constructor(){
    document.querySelector("body").style.display = "none"; // Glab all users in the body and hide the body of the page to prevent users from seeing
    const auth = localStorage.getItem("auth"); // Get the auth token from the local storage. Dev tool-Appication tab to see what's in local storage
    this.validateAuth(auth); // Call the validate method with the auth token
    }

    validateAuth(auth){
        if(auth != 1){ // If there is no auth token
            window.location.replace("login.html"); // Redirect the user to the login page
        }
        else{
            document.querySelector("body").style.display = "block"; // If there is an auth token, show the body of the page
        }
    }

    logOut(){
        localStorage.removeItem("auth"); // Remove the auth token from the local storage
        localStorage.removeItem("token"); // Remove the token from the local storage
        localStorage.removeItem("uname"); // Remove the username from the local storage

        window.location.replace("login.html"); // Redirect the user to the login page
    }
}