console.log("loadsongs.js");

// ****** SET EMPTY ARRAY TO HOLD SONGS ****** //
let songs = [];


// ****** FUNCTION TO LOAD SONGS FROM JSON ****** //
function loadSongs (callBackToInvoke) {

	let getSongs = new XMLHttpRequest();

	getSongs.addEventListener("load", function (event) {
      	console.log("messages loaded successfully");
      	let songs = JSON.parse(this.responseText);
      	console.log("songs", songs);
        callBackToInvoke(songs);
		return songs;
      });

    getSongs.addEventListener("error", function (event) {
        	console.log("dataFailed", event);
    });

 	getSongs.open("GET", "songs.json");
	getSongs.send();

	return callBackToInvoke;
}


// ****** FUNCTION TO LOAD MORE SONGS FROM JSON ****** //
function loadMoreSongs (callBackToInvoke) {

	let getMoreSongs = new XMLHttpRequest();

	getMoreSongs.addEventListener("load", function (event) {
      	console.log("messages loaded successfully");
      	let moreSongs = JSON.parse(this.responseText);
      	console.log("moreSongs", moreSongs);
        callBackToInvoke(moreSongs);
		return moreSongs;
      });

    getMoreSongs.addEventListener("error", function (event) {
        	console.log("dataFailed", event);
    });

 	getMoreSongs.open("GET", "moresongs.json");
	getMoreSongs.send();

	return callBackToInvoke;
}