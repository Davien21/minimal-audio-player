let slider_input = document.querySelector('input.audio-slider'); 
let volume_input = document.querySelector('.volume-slider'); 
// let slider_div = document.querySelector('div.slider-progress'); 
let slider_container = document.querySelector('div.slider-container'); 
let slider_body = document.querySelector('div.player-slider'); 

let song_title = document.querySelector(".track-title");
let play_btn = document.querySelector(".play-btn");
let current_time_span = document.querySelector('.current-time')
let duration_span = document.querySelector('.duration')

let song = new Audio();
song.src = './assets/audio/Ed Sheeran - Give Me Love.mp3';
song.controls = true;
let reset_counter = 0;
slider_input.onchange = (e) => {
	if(reset_counter === 0) {
		playSong ();
	}
	let slider_value = e.target.value;
	let current_time = convertSliderValueToTime(slider_value);
	console.log(current_time)
	setTime(current_time);


}
volume_input.oninput = () => {

}
function playSong () {
	if (song.src === '') {
		song_title.innerText = 'No Track Loaded';
		return;
	}
	if (song.paused) {
		song.play();
	}else {
		song.pause();
	}
	togglePlayImg();
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
function togglePlayImg () {
    let img = play_btn.querySelector('img');
    if (song.paused) {
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
    setTime(song.currentTime);
}
function setTime(rawTime) {
  // let hours = Math.floor(song.currentTime / 3600);
  current_time_span.innerText = formatted_time(rawTime);
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
		song_title.innerText = getSongTitle(song.attributes[1].value);
		reset_counter++;
	}
}
song.onended = () => {
	let img = play_btn.querySelector('img');
	img.src = './assets/imgs/play.svg'
}
function convertSliderValueToTime (input) {
	let time = (input*song.duration)/100;
	song.currentTime = time;
	return time;
}
function getSongTitle (srcValue) {
	if(srcValue.includes('/') !==true) {
		return srcValue;
	}else {
		title = srcValue.slice(srcValue.lastIndexOf('/')+1);
		return title;
	}
}
console.log(getSongTitle('./assets/imgs/play.svg'))