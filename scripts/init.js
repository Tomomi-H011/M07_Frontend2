//File for creating the authentication instance and grabing the logout button

const auth = new Auth(); // Create a new instance of the Auth class
document.querySelector("#logout").addEventListener("click", (e) =>{ // Grab the logout button and add an event listener to it
    auth.logOut(); // Call the logOut method from the Auth class
});