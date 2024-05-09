function resize() {
	document.getElementById("video").style.width = slider.value;
	document.getElementById("video").style.height = "240px";
};
function fullscreen() {
	document.getElementById("video").style.width = "100%";	document.getElementById("video").style.height = "100%";
};
let vid = document.getElementById("video");

function play() {
    vid.play();
}

function pause() {
    vid.pause();
}