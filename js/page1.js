const backsoundAudio = document.querySelector('#backsoundgame');
backsoundAudio.volume = 0.2;
backsoundAudio.loop = true;
const btnAudio = document.getElementById("btnAudio");
let audioaktif = true;
const audioIcon = btnAudio.querySelector("i.fa-solid.fa-volume-high");
btnAudio.addEventListener('click', function() {
    if (audioaktif) {
        backsoundAudio.volume = 0.2;
        backsoundAudio.loop = true;
        backsoundAudio.pause();
        audioaktif = false;
        audioIcon.classList.remove("fa-volume-high");
        audioIcon.classList.add("fa-volume-xmark");
    } else {
        backsoundAudio.volume = 0.2;
        backsoundAudio.loop = true;
        backsoundAudio.play();
        audioaktif = true;
        audioIcon.classList.remove("fa-volume-xmark");
        audioIcon.classList.add("fa-volume-high");
    }
});