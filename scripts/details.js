addEventListener("DOMContentLoaded", async function() {
    const urlparam = new URLSearchParams(window.location.search);  //Grab the search parameter from the URL after the question mark (?id=...)
    const songID = urlparam.get('id');  //Get the value of the id parameter
    console.log(songID);

    const response = await this.fetch("https://climbing-speckle-wasp.glitch.me/api/songs/" + songID);  //Fetch the song with the id from the server
    const song = await response.json();  //Parse the response (song details) to a JSON object
    console.log(song);

    let heading =""
    heading += `${song.title}`;
    this.document.querySelector("h1").innerHTML = heading;  //Insert the song title to the h1 element

    let html = "";
    html += `
        <h3>Artist - ${song.artist}</h2>
        <p>Popularity - ${song.popularity}</p>
        <p>Release Date - ${song.releaseDate}</p>
        <p>Genre - ${song.genre}</p>
    `
    this.document.querySelector("div").innerHTML = html;  //Insert the song details to the div element


});