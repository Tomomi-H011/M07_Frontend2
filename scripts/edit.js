addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#updateBtn").addEventListener("click", updateSong); //Run the updateSong function when the button is clicked
    const urlparam = new URLSearchParams(window.location.search);  //Grab the search parameter from the URL after the question mark (?id=...)
    const songID = urlparam.get('id');  //Get the value of the id parameter

    const response = await this.fetch("https://climbing-speckle-wasp.glitch.me/api/songs" + songID);  //Fetch the song with the id from the server

    if(response.ok) {
        let song = await response.json();  //Parse the response (song details) to a JSON object
        // Fill the form with the song details
        document.querySelector("#songId").value = song._id;
        document.querySelector("#title").value = song.title;
        document.querySelector("#artist").value = song.artist;
        document.querySelector("#released").value = song.releaseDate.substring(0, 10);  //Get the first 10 characters of the release date
        document.querySelector("#popularity").value = song.popularity;
        document.querySelector("#genre").value = song.genre;
    }

});

// Update the song in the db. Need async function for calling data outside the server
async function updateSong() {

    // Create song object from form fields
    const songID = document.querySelector("#songId").value;
    const song = {
        _id: document.querySelector("#songId").value,
        title: document.querySelector("#title").value,  
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : [] // Ternary operator.Split the genre string into an array when there are commas.
    };
    const response = await fetch("https://climbing-speckle-wasp.glitch.me/api/songs/" + songID, {  //Put the song object to the server and save the song to the database //Added slash after ...api/songs/
        method: "PUT",
        headers: {
            "Content-Type": "application/json"  //Must specify format being sent
        },
        body: JSON.stringify(song)  //Parse the song object to a JSON string before sending it to the server
    });

    if(response.ok) {
        alert("Updated Song");  //Alert the user that the song was updated successfully
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot update song";  //Insert the error message to the div with the id "error"
    }
}
