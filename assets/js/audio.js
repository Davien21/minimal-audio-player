let slider_input = document.querySelector('input.audio-slider'); 
let slider_div = document.querySelector('div.slider-progress'); 
let slider_container = document.querySelector('div.slider-container'); 
let slider_body = document.querySelector('div.player-slider'); 
let slider_width = 
console.log(slider_input);
console.log(slider_div);
adjust_slide();
slider_input.oninput = () => {
adjust_slide();
	
}
 
function adjust_slide () {
	let slider_value = slider_input.value+"%";
	console.log(slider_value)
	console.log(slider_input)
	slider_div.style.width = slider_value;
}
