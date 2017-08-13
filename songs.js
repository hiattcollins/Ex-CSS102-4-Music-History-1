// console.log(songs);

// ****** DECLARE GLOBAL VARIABLES ****** //
let songArray = [];
let moreStatus = false;


$(document).ready(function() {

// ****** EVENT LISTENER FOR ADD MUSIC BUTTON ****** //
$("#addButton").click(addSongToList);


// ****** ADD SONG TO ARRAY VIA ADD SONG PAGE ****** //
function addSongToList() {
	let newSong = {name: $("#songName").val(),
						  artist: $("#artist").val(),
						  album: $("#album").val(),
						  genre: $("#genre").val()};

	songArray.push(newSong);

	console.log("songArray after addition of new song", songArray);

	$("#songName").val("");
	$("#artist").val("");
	$("#album").val("");
} 


// ****** EVENT LISTENER FOR BUTTON CLICKS ON SONG BLOCK ****** //
$("#songBlock").click(function(event) {

	// ****** TRIGGER FOR FUNCTION TO DELETE SONG FROM ARRAY AND REPRINT DOM ****** //
	if (event.target.className === "delete-btn") {

		deleteSongFromArray(event.target.previousSibling.innerHTML);	
	}

	// ****** TRIGGER FOR FUNCTION TO ADD MORE SONGS TO ARRAY AND REPRINT DOM ****** //
	if (event.target.id === "more-btn") {

		loadMoreSongs(getMoreSongs);
	}
});


// ****** CALLBACK FUNCTION TO RETRIEVE AND PRINT SONGS LOADED FROM JSON ****** //
function getSongs(songs) {
	console.log("songs at getSongs", songs);
	songArray = songs;
	printSongs(songArray);
}


// ****** FUNCTION TO RETRIEVE AND PRINT MORE SONGS LOADED FROM JSON ****** //
function getMoreSongs(songs) {
	songs.forEach(function (element) {
			songArray.push(element);
	});
	
	// ****** VARIABLE TO HOLD STATUS OF MORE BUTTON ONCE CLICKED ****** //
	moreStatus = true;

	printSongs(songArray)

}

// ****** FUNCTION TO DELETE SPECIFIED SONG FROM ARRAY ON CLICK OF DELETE BUTTON, AND REPRINT DOM ****** //
function deleteSongFromArray(songToDelete) {
	songArray = songArray.filter(function (element) {
		return (element.name !== songToDelete)
	})
	printSongs(songArray);
}

// ****** FUNCTION TO PRINT SONGS FROM ARRAY TO DOM ****** //
window.printSongs = function(songInput) {
	$("#songBlock").html(``);
	
	songInput.forEach((item) => {
		$("#songBlock").append(`<div class="songCard">
																<span class="songName">${item.name}</span><button class="delete-btn">Delete</button>
																<ul class="songInfo">
																	<li>${item.artist}</li>
																	<li class="middleSongInfo">${item.album}</li>
																	<li>${item.genre}</li>

																</ul>
															</div>`);
	});

	$("#songBlock").append(`<button id="more-btn">More</button>`);

	// ****** DISABLE MORE BUTTON IF ALREADY CLICKED ****** //
	if (moreStatus === true) {
		$("#more-btn").attr('disabled', true);
	}
}


// ****** INITIALIZE LOADING OF SONGS FROM JSON ****** //
loadSongs(getSongs);

});