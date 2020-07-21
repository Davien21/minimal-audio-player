// alert('message?: DOMString')
let btn = document.querySelector("#play");
let poster = ["Poster1.jpg","Poster2.jpg","Poster3.jpg"];
let songs = 
    [
        "Ed Sheeran - Give Me Love.mp3",
        "Ed Sheeran - I See Fire.mp3",
        "Ed Sheeran - Photograph.mp3"
    ];
for (let i in songs) {
    songs[i] = "./assets/audio/"+songs[i];
}
for (let i in poster) {
    poster[i] = "./assets/imgs/"+poster[i];
}
let songTitle = document.getElementById("songTitle");
let fillBar = document.getElementById("fill");
let song = new Audio();
let currentSong = 0;    // it point to the current song
window.onload = playSong;   // it will call the function playSong when window is load
 
function playSong(){
    song.src = songs[currentSong];  //set the source of 0th song 
    songTitle.textContent = songs[currentSong].replace('./assets/audio/',''); // set the title of song
    songTitle.textContent =  songTitle.textContent.replace('.mp3',''); // set the title of song
    song.play();    // play the song
}
function playOrPauseSong(){
    if(song.paused){
        song.play();
        togglePlayImg ();
    }
    else{
        song.pause();
        togglePlayImg ();

    }
    console.log(song)
}
song.addEventListener('timeupdate',function(){ 
    let position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 +'%';
});
function next(){
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","./assets/imgs/pause.svg");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}
function pre(){
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src","./assets/imgs/pause.svg");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}
function togglePlayImg () {
    let img = btn.querySelector('img');
    $('#play img').toggleClass('play');
    if (img.src.includes('pause')) {
        img.src = './assets/imgs/play.svg';
    }else {
        img.src = './assets/imgs/pause.svg';
    }
}

