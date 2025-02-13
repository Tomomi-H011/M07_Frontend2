
addEventListener("DOMContentLoaded", async function() {
   
    document.querySelector("#deleteBtn").addEventListener("click", deleteSong);  //Run the deleteSong function when the button is clicked

});

// Delete a song by id
async function deleteSong() {
    const urlparam = new URLSearchParams(window.location.search);  // Grab the search parameter from the URL after the question mark (?id=...)
    const songID = urlparam.get('id');  // Get the value of the id parameter

    const response = await fetch("https://climbing-speckle-wasp.glitch.me/api/songs/" + songID, {
        method: "DELETE"
    });

    if (response.ok) {
        alert("Song deleted successfully");
        window.location.href = "index.html";  // Redirect to the main page after deletion // removed slash before index.html
    } else {
        alert("Failed to delete the song");
    }
}