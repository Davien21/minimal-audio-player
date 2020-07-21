let slider_input = document.querySelector('input.audio-slider'); 
let volume_input = document.querySelector('.volume-slider'); 
// let slider_div = document.querySelector('div.slider-progress'); 
let slider_container = document.querySelector('div.slider-container'); 
let slider_body = document.querySelector('div.player-slider'); 

let song_title = document.getElementById(".track-title");
let play_btn = document.getElementById(".play-btn");
let current_time_span = document.querySelector('.current-time')
let duration_span = document.querySelector('.duration')

let song = new Audio();
song.src = './assets/audio/Ed Sheeran - Give Me Love.mp3';
let reset_counter = 0;
slider_input.oninput = () => {

}
volume_input.oninput = () => {

}
function playSong (btn) {
	if (song.paused) {
		song.play();
	}else {
		song.pause();
	}
	togglePlayImg(btn);
	startNewTrack()
}
console.log(song)
console.log(slider_input);

let songs = 
    [
        "Ed Sheeran - Give Me Love.mp3",
        "Ed Sheeran - I See Fire.mp3",
        "Ed Sheeran - Photograph.mp3"
    ];
function togglePlayImg (btn) {
    let img = btn.querySelector('img');
    if (img.src.includes('pause')) {
        img.src = './assets/imgs/play.svg';
    }else {
        img.src = './assets/imgs/pause.svg';
    }
}
function showVolumeRocker() {
	alert('show volume rocker');
}
song.ontimeupdate = () => {
    let position = song.currentTime / song.duration;
    slider_input.value = position * 100;
    // current_time_span.innerText = song.currentTime;
    setTime();
}
function setTime() {
  // let hours = Math.floor(song.currentTime / 3600);
  current_time_span.innerText = formatted_time(song.currentTime);
  // console.log(minutes);
  // console.log(seconds);
}
function formatted_time (rawTime) {
	let minutes = Math.floor(rawTime / 60);
	let seconds = Math.floor(rawTime - minutes * 60);
	let minuteValue;
	let secs = seconds<10 ? "0"+seconds:seconds;
	let mins = minutes<10 ? "0"+minutes:minutes;
	return output = `${mins}:${secs}`;
}
function startNewTrack () {
	if (reset_counter === 0) {
		duration_span.innerText = formatted_time(song.duration);
		reset_counter++;
	}
}
