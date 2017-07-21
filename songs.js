

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// console.log(songs);

songs.unshift("Antitaxi > by La Femme on the @album Psycho Tropical Berlin");

songs.push("Ball and Biscuit > by The White Stripe*s on the album Elephant");

var charsToRemove = [/\*/g, /@/g, /\(/g, /\!/g];

// console.log(songs);

for (var i = 0; i < charsToRemove.length; i++) {
	charCut = charsToRemove[i];

	for (var j = 0; j < songs.length; j++) {
		songs[j] = songs[j].replace(charCut, "");
		songs[j] = songs[j].replace(">", "-");	
	}
}

for (var k = 0; k < songs.length; k++) {
	document.getElementById("songBlock").innerHTML += `<p>${songs[k]}</p>`;
}

// console.log(songs);



// Requirements

// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Use JavaScript to create a list of songs in the index.html file for your Music History project. Download the songs.js file, which contains an array of strings with song information.

// Add one song to the beginning and the end of the array.
// Loop over the array, and remove any words or characters that obviously don't belong.
// Find and replace the > character in each item with a - character.
// Add each string to the DOM in index.html in the main content area.
// Example output:

// {Song name} by {Artist} on the album {Album}

// {Song name} by {Artist} on the album {Album}

// ...