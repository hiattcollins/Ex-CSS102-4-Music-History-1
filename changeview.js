let linkListMusic = document.getElementById("linkViewMusic");
let linkAddMusic = document.getElementById("linkAddMusic");
// let linkProfile = document.getElementById("linkProfile");

let viewListMusic_sideMenu = document.getElementById("sideMenu");
let viewListMusic_songBlock = document.getElementById("songBlock");
let viewAddMusic = document.getElementById("addMusic");
// let viewProfile = document.getElementById("profile");

linkListMusic.addEventListener("click", function() {
	viewListMusic_sideMenu.classList.add("visible");
	viewListMusic_sideMenu.classList.remove("hidden");

	viewListMusic_songBlock.classList.add("visible");
	viewListMusic_songBlock.classList.remove("hidden");

	viewAddMusic.classList.add("hidden");
	viewAddMusic.classList.remove("visible");
});

linkAddMusic.addEventListener("click", function() {
	viewAddMusic.classList.add("visible");
	viewAddMusic.classList.remove("hidden");

	viewListMusic_sideMenu.classList.add("hidden");
	viewListMusic_sideMenu.classList.remove("visible");

	viewListMusic_songBlock.classList.add("hidden");
	viewListMusic_songBlock.classList.remove("visible");
});