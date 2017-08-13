// console.log("loadsongs.js");

$(document).ready(function() {

// ****** SET EMPTY ARRAY TO HOLD SONGS ****** //
let songs = [];


// ****** FUNCTION TO LOAD SONGS FROM JSON ****** //

window.loadSongs = function(callBackToInvoke) { 
  $.ajax({
      url:"songs.json"
    }).done(callBackToInvoke)
      .fail(function(error) {
        console.log("Error:", error);
  });

}


// ****** FUNCTION TO LOAD MORE SONGS FROM JSON ****** //

window.loadMoreSongs = function(callBackToInvoke) {

  $.ajax({
       url:"moresongs.json"
     }).done(callBackToInvoke)
     .fail(function(error) {
       console.log("Error:", error);
    });
}

});