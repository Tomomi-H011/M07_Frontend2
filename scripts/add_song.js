addEventListener("DOMContentLoaded", function() {
    document.querySelector("#addBtn").addEventListener("click", addSong);
});

// Add the song to the db. Need async function for calling data outside the server
async function addSong() {
    // Create a song object based on the input fields of the form
    const song = {   // Objects need to match the backend schema (song.js)
        title: document.querySelector("#title").value,  
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : [] // Ternary operator.Split the genre string into an array when there are commas.
    };
    
    // Post the song object to the server and save the song to the database
    const response = await fetch("https://climbing-speckle-wasp.glitch.me/api/songs/", {  
        method: "POST",
        headers: {
            "Content-Type": "application/json"  //Must specify format being sent
        },
        body: JSON.stringify(song)  //Parse the song object to a JSON string before sending it to the server
    });

    if(response.ok) {
        const results = await response.json();
        alert("Added song with ID of " + results._id); //Alert the user that the song was added successfully. Show the ID of the song.

        // Reset the form after song is added
        document.querySelector("form").reset();
    }
    else {
        document.querySelector("#error").innerHTML = "Cannot add song";  //Insert the error message to the div with the id "error"
        
    }
}