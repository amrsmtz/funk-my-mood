var awesome = new Audio('./tracks/awesome.mp3');
function playAwesome() {
  awesome.play();
}
var boo = new Audio('./tracks/boo.wav');
function playBoo() {
  boo.play();
}
var claps = new Audio('./tracks/claps.wav');
function playClaps() {
  claps.play();
}
var fuckYou = new Audio('./tracks/fuck-you.m4a');
function playFuckYou() {
  fuckYou.play();
}
var makeMyDay = new Audio('./tracks/go-ahead-make-my-day.m4a');
function playMakeMyDay() {
  makeMyDay.play();
}
var illBeBack = new Audio('./tracks/i-ll-be-back.m4a');
function playIllBeBack() {
  illBeBack.play();
}
var lol = new Audio('./tracks/lol.wav');
function playLol() {
  lol.play();
}
var madDude = new Audio('./tracks/mad-dude.wav');
function playMadDude() {
  madDude.play();
}
var ohMyGod = new Audio('./tracks/oh-my-god.wav');
function playOhMyGod() {
  ohMyGod.play();
}
var perfectTiming = new Audio('./tracks/perfect-timing.mov');
function playPerfectTiming() {
  perfectTiming.play();
}
var scared = new Audio('./tracks/scared.m4a');
function playScared() {
  scared.play();
}
var whistle = new Audio('./tracks/whistle.wav');
function playWhistle() {
  whistle.play();
}
function playTrack(track) {
  track.play();
}

document.getElementById('happy').addEventListener('click', playAwesome);
document.getElementById('lol').addEventListener('click', playLol);
document.getElementById('stars').addEventListener('click', playOhMyGod);
document.getElementById('whistle').addEventListener('click', playWhistle);

document.getElementById('blow-steam').addEventListener('click', playIllBeBack);
document.getElementById('scared').addEventListener('click', playScared);
document.getElementById('mad').addEventListener('click', playMakeMyDay);
document.getElementById('mad-dude').addEventListener('click', playMadDude);

document.getElementById('thumb-up').addEventListener('click', playClaps);
document.getElementById('thumb-down').addEventListener('click', playBoo);
document.getElementById('perfect').addEventListener('click', playPerfectTiming);
document.getElementById('middle-finger').addEventListener('click', playFuckYou);
