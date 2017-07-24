var songs = [];

songs[songs.length] = {name: "Antitaxi", artist: "La Femme", album: "Psycho Tropical Berlin", genre: "Electronic"};
songs[songs.length] = {name: "Legs", artist: "ZZTop", album: "Eliminator", genre: "Rock"};
songs[songs.length] = {name: "The Logical Song", artist: "Supertramp", album: "Breakfast in America", genre: "Rock"};
songs[songs.length] = {name: "Another Brick in the Wall", artist: "Pink Floyd", album: "The Wall", genre: "Rock" };
songs[songs.length] = {name: "Welcome to the Jungle", artist: "Guns 'N' Roses", album: "Appetite for Destruction", genre: "Rock"};
songs[songs.length] = {name: "Ironic", artist: "Alanis Morisette", album: "Jagged Little Pill", genre: "Rock"};
songs[songs.length] = {name: "Ball and Biscuit", artist: "The White Stripes", album: "Elephant", genre: "Rock"};


// console.log(songs);

let addMusicButton = document.getElementById("addButton");
addMusicButton.addEventListener("click", addSongToList);

function addSongToList() {
	songs[songs.length] = {name: document.getElementById("songName").value,
						  artist: document.getElementById("artist").value,
						  album: document.getElementById("album").value,
						  genre: "None"};
	// console.log(songs);

	document.getElementById("songName").value = "";
	document.getElementById("artist").value = "";
	document.getElementById("album").value = "";
} 

function printSongs() {

	document.getElementById("songBlock").innerHTML = ``;

	songs.forEach((item) => {
		document.getElementById("songBlock").innerHTML += `<div>
																<span class="songName">${item.name}</span>
																<ul class="songInfo">
																	<li>${item.artist}</li>
																	<li class="middleSongInfo">${item.album}</li>
																	<li>${item.genre}</li>
																</ul>
															</div>`;
	});
}

printSongs();

