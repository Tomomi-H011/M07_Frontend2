// Event lister that will trigger when DOM is loaded (= when visiting the page)
addEventListener('DOMContentLoaded', async function () {
    const response = await this.fetch("https://invited-salty-gem.glitch.me/api/songs");  //"http://localhost:3000/api/songs"

    const songs = await response.json();

    let html = '';
    for (let song of songs) {
        html += `<li>${song.title} - ${song.artist}</li>`;
    } 
    
    document.querySelector("#addedsong").innerHTML = html;  // Insert the html to the div with the id "addedsong"
});