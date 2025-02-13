// Event lister that will trigger when DOM is loaded (= when visiting the page)
addEventListener('DOMContentLoaded', async function () {
    const response = await fetch("https://climbing-speckle-wasp.glitch.me/api/songs");  //"http://localhost:3000/api/songs" or "https://climbing-speckle-wasp.glitch.me/api/songs"

    const songs = await response.json();

    let html = '';
    for (let song of songs) {
        let songID = song._id;
        html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit Song</a></li>`;  // Add the song title and artist to the html
    } 
    
    document.querySelector("#list_of_songs").innerHTML = html;  // Insert the html to the div with the id "addedsong"
});