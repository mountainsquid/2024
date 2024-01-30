// programming session 15, 20 minutes (#14)
// date: Jan 30 2024 

// push is adding a variable into the END of the array 
// imagine a blackpink album
// 1, 2, 3, 4, 5 ,6 songs ...
// use push to add the 7th song
// THAT IS FUCKING GREAT. 

// create track using array 
let tracks = ["kill this love", "savage"];

// checking that the track only has 2 songs 
console.log(tracks)

// add additional song using push() 
tracks.push("how you like that"); 

// now the track has all three songs 
console.log(tracks);

// remember, push() is LAST IN, FIRST OUT. 
// now it's time to pop (remove) the song out 
// using pop()
// remember, it's pushing the song in
// popping the song out 

// AHHH SHIEEEET I'M POPPING OUT THE LAST SONG 
// Or rather the last item in the array 
var lastSong = tracks.pop(); 

// shows the last song of the track
console.log("Last song of the track: ", lastSong);

// first in, first out (FIFO)
// be like, blackpink member get to meet blackpink
// first in line gets to meet blackpink, then leaves
// therefore, first in line does the action, then gets out. 
// EASILY TO REMEMBER 

// Create the array for the queue 
// the array is empty but don't worry
// I'll add the fans here 
let queue = [];

// adding the fans into the array  
queue.push("Jennie stan");
queue.push("Rose stan");
queue.push("Jisoo stan");
queue.push("Lisa stan");

// show the fans in the array
// they're actually inside 
console.log(queue);

