
addEventListener("DOMContentLoaded", async function() {
   
    document.querySelector("#deleteBtn").addEventListener("click", deleteSong);  //Run the deleteSong function when the button is clicked
    getAllSongs();
});

// Get all songs from the API
async function getAllSongs() {
    const response = await fetch("https://grove-numerous-weeder.glitch.me/api/songs");
    if(response.ok){
        const songs = await response.json();
        let html = "";
        for (let song of songs){
            html += `<option value="${song._id}">${song.title}</option>`;
        }
    document.querySelector("#songDropDown").innerHTML = html;  // Add the songs to the dropdown
    }
}


// Delete a song by id
async function deleteSong() {
    const songID = document.querySelector("#songDropDown option: checked").value;  // Get the value of the selected song from the dropdown
    const response = await fetch("https://grove-numerous-weeder.glitch.me/api/songs/" + songID, {
        method: "DELETE"
    });
    if (response.ok) {
        getAllSongs(); // Refresh the dropdown after deletion
        alert("Song Deleted");
        // window.location.href = "index.html";  // Redirect to the main page after deletion
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot delete the song";
    }
}


// async function deleteSong() {
//     const urlparam = new URLSearchParams(window.location.search);  // Grab the search parameter from the URL after the question mark (?id=...)
//     const songID = urlparam.get('id');  // Get the value of the id parameter

//     const response = await fetch("https://grove-numerous-weeder.glitch.me/api/songs/" + songID, {
//         method: "DELETE"
//     });

//     if (response.ok) {
//         alert("Song deleted successfully");
//         window.location.href = "index.html";  // Redirect to the main page after deletion // removed slash before index.html
//     } else {
//         alert("Failed to delete the song");
//     }
// }