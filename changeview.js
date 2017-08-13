$(document).ready(function() {

let linkListMusic = $("#linkViewMusic");
let linkAddMusic = $("#linkAddMusic");
// let linkProfile = document.getElementById("linkProfile");

let viewListMusic_sideMenu = $("#sideMenu");
let viewListMusic_songBlock = $("#songBlock");
let viewAddMusic = $("#addMusic");
// let viewProfile = document.getElementById("profile");

linkListMusic.click(function() {
	viewListMusic_sideMenu.addClass("visible");
	viewListMusic_sideMenu.removeClass("hidden");

	viewListMusic_songBlock.addClass("visible");
	viewListMusic_songBlock.removeClass("hidden");

	viewAddMusic.addClass("hidden");
	viewAddMusic.removeClass("visible");

	printSongs(songArray);
});

linkAddMusic.click(function() {
	viewAddMusic.addClass("visible");
	viewAddMusic.removeClass("hidden");

	viewListMusic_sideMenu.addClass("hidden");
	viewListMusic_sideMenu.removeClass("visible");

	viewListMusic_songBlock.addClass("hidden");
	viewListMusic_songBlock.removeClass("visible");
});

});