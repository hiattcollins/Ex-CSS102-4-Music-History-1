// console.log(songs);

// ****** DECLARE GLOBAL VARIABLES ****** //
let songArray = [];
let moreStatus = false;

// ****** EVENT LISTENER FOR ADD MUSIC BUTTON ****** //
let addMusicButton = document.getElementById("addButton");
addMusicButton.addEventListener("click", addSongToList);

function addSongToList() {
	console.log("songArray at beginning of addSongToList", songArray);

	let newSong = {name: document.getElementById("songName").value,
						  artist: document.getElementById("artist").value,
						  album: document.getElementById("album").value,
						  genre: "None"};
	// console.log(songs);

	console.log("newSong", newSong);
	// songArray = songArray.push(newSong);

	songArray.push(newSong);

	document.getElementById("songName").value = "";
	document.getElementById("artist").value = "";
	document.getElementById("album").value = "";

	console.log("songArray after addition:", songArray);
} 


document.getElementById("songBlock").addEventListener("click", function(event) {
	
	// ****** TRIGGER FOR FUNCTION TO DELETE SONG FROM ARRAY AND REPRINT DOM ****** //
	if (event.target.className === "delete-btn") {
		deleteSongFromArray(event.target.previousSibling.innerHTML);	
	}

	// ****** TRIGGER FOR FUNCTION TO ADD MORE SONGS TO ARRAY AND REPRINT DOM ****** //
	if (event.target.id === "more-btn") {
		console.log("MORE");
		loadMoreSongs(getMoreSongs);
	}
});


function getSongs(songs) {
	console.log("songs at getSongs", songs);
	songArray = songs;
	printSongs(songArray);
}

function getMoreSongs(songs) {
	console.log("songs from getMoreSongs", songs);
	songs.forEach(function (element) {
			songArray.push(element);
	});
	
	console.log("songArray from getMoreSongs", songArray);

	moreStatus = true;

	printSongs(songArray)

}

function deleteSongFromArray(songToDelete) {
	songArray = songArray.filter(function (element) {
		return (element.name !== songToDelete)
	})
	printSongs(songArray);
}


function printSongs(songInput) {

	document.getElementById("songBlock").innerHTML = ``;

	songInput.forEach((item) => {
		document.getElementById("songBlock").innerHTML += `<div class="songCard">
																<span class="songName">${item.name}</span><button class="delete-btn">Delete</button>
																<ul class="songInfo">
																	<li>${item.artist}</li>
																	<li class="middleSongInfo">${item.album}</li>
																	<li>${item.genre}</li>

																</ul>
															</div>`;
	});

	document.getElementById("songBlock").innerHTML += `<button id="more-btn">More</button>`

	if (moreStatus === true) {
		document.getElementById("more-btn").setAttribute('disabled', true);
	}
}

loadSongs(getSongs);




// Requirements

// Part One

// Read from local JSON file with an XHR.
// Loop over results and inject into Music History list view.
// Add delete button to each row and, when it is clicked, delete the entire row in the DOM.
// Part Two

// Take your music and split it into two JSON files instead of them all living on one file.
// Add a button at the bottom of your music list and label it More >.
// Load the songs from the first list, and inject the DOM into the document as you've already done.
// When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.