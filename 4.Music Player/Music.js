const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackTitle = document.getElementById('track-title');

const tracks = [
    { title: 'Song 1', src: '128-Hey Shona - Ta Ra Rum Pum 128 Kbps.mp3' },
    { title: 'Song 2', src: 'Aashiq Banaya Aapne Himesh Reshammiya 128 Kbps.mp3' },
    { title: 'Song 3', src: 'Bandaa Re Raaz The Mystery Continues 128 Kbps.mp3' }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playAudio();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playAudio();
}

playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
prevButton.addEventListener('click', prevTrack);
nextButton.addEventListener('click', nextTrack);

loadTrack(currentTrackIndex);
