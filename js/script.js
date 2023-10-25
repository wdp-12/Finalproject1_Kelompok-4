// JS Halaman 3 Awal
const awan = document.querySelectorAll(".img");
const score = document.querySelector(".score");
const pop = document.querySelector('#pop');
const gambarPokemon = ["./img/pokemon1.png", "./img/pokemon2.png", "./img/pokemon3.png"];
const awanElements = document.querySelectorAll(".img");

const menuIcon = document.getElementById("menu-icon");
const btnNav = document.getElementById("btn-nav");

menuIcon.addEventListener("click",  function() {
    btnNav.classList.toggle("hidden")
})


// Membuat Sound aktif dan tidak aktif
const btnSound = document.getElementById("btnSound");
let soundaktif = true;
const backsound = document.querySelector('#backsound');
backsound.volume = 0.2;
backsound.loop = true;
backsound.play();
const soundIcon = btnSound.querySelector("i.fa-solid.fa-volume-high");
btnSound.addEventListener('click', function() {
    if (soundaktif) {
        backsound.volume = 0.2;
        backsound.loop = true;
        backsound.pause();
        soundaktif = false;
        soundIcon.classList.remove("fa-volume-high");
        soundIcon.classList.add("fa-volume-xmark");
    } else {
        backsound.volume = 0.2;
        backsound.loop = true;
        backsound.play();
        soundaktif = true;
        soundIcon.classList.remove("fa-volume-xmark");
        soundIcon.classList.add("fa-volume-high");
    }
});
const btn = document.querySelector(".btn")
btn.addEventListener('click', function () {
    window.location.href = "index.html"
})

// Membuat Pokemon muncul secara acak
for (let i = 0; i < awanElements.length; i++) {
    const awan = awanElements[i];
    const newImage = document.createElement("div");
    newImage.classList.add("pokemon");

    const randomimg = gambarPokemon[Math.floor(Math.random() * gambarPokemon.length)];
    newImage.style.backgroundImage = `url(${randomimg})`;

    awan.appendChild(newImage);
}

const pokemon = document.querySelectorAll(".pokemon");

// membuat fitur baru untuk mode easy, medium dan hard
let displaymode = false;
const btnMode = document.getElementById("btnMode");
btnMode.addEventListener("click", function () {
    if (!displaymode) {
        const divMode = document.createElement("div");
        divMode.classList.add("mode");
        divMode.id = "mode";

        const isiMode = document.createElement("p");
        isiMode.classList.add("isiMode");
        isiMode.innerText = "Please choose the mode you prefer";

        const buttonMode = document.createElement("div");
        buttonMode.classList.add("buttonMode");
        buttonMode.id = "buttonmode";

        const buttonEasy = document.createElement("button");
        buttonEasy.classList.add("buttonEasy");
        buttonEasy.id = "easy";
        buttonEasy.innerText = "Easy";
        buttonEasy.ariaPressed = "false";
        buttonEasy.addEventListener("click", function () {
            const isPressed = buttonEasy.getAttribute("aria-pressed") === "true";
            
            if (isPressed) {
                buttonEasy.setAttribute("aria-pressed", "false");
            } else {
                buttonEasy.setAttribute("aria-pressed", "true");
                buttonMedium.setAttribute("aria-pressed", "false");
                buttonHard.setAttribute("aria-pressed", "false");
            }
            console.log(isPressed);
        });

        const buttonMedium = document.createElement("button");
        buttonMedium.classList.add("buttonMedium");
        buttonMedium.id = "medium";
        buttonMedium.innerText = "Medium";
        buttonMedium.ariaPressed = "false";
        buttonMedium.addEventListener("click", function () {
            const isPressed = buttonMedium.getAttribute("aria-pressed") === "true";
            
            if (isPressed) {
                buttonMedium.setAttribute("aria-pressed", "false");
            } else {
                buttonMedium.setAttribute("aria-pressed", "true");
                buttonEasy.setAttribute("aria-pressed", "false");
                buttonHard.setAttribute("aria-pressed", "false");
            }
        });

        const buttonHard = document.createElement("button");
        buttonHard.classList.add("buttonHard");
        buttonHard.id = "hard";
        buttonHard.innerText = "Hard";
        buttonHard.ariaPressed = "false";
        buttonHard.addEventListener("click", function () {
            const isPressed = buttonHard.getAttribute("aria-pressed") === "true";
            
            if (isPressed) {
                buttonHard.setAttribute("aria-pressed", "false");
            } else {
                buttonHard.setAttribute("aria-pressed", "true");
                buttonEasy.setAttribute("aria-pressed", "false");
                buttonMedium.setAttribute("aria-pressed", "false");
            }
        });

        const buttonSubmit = document.createElement("button");
        buttonSubmit.classList.add("buttonSubmit");
        buttonSubmit.innerText = "Start";

        buttonSubmit.addEventListener("click", function () {
            mulai();
            divMode.remove();
        });

        document.getElementById("col").appendChild(divMode);
        document.getElementById("mode").appendChild(isiMode);
        document.getElementById("mode").appendChild(buttonMode);
        document.getElementById("buttonmode").appendChild(buttonEasy);
        document.getElementById("buttonmode").appendChild(buttonMedium);
        document.getElementById("buttonmode").appendChild(buttonHard);
        document.getElementById("mode").appendChild(buttonSubmit);

        displaymode = true;
    } else {
        const divMode = document.querySelector(".mode");
        if (divMode) {
            divMode.remove();
        }
        displaymode = false;
    }
});

let tanahSebelumnya;
let selesai;
let skor;

// ini untuk mendapatkan nilai dari button fitur yang dipilih
function difficultyLevel() {
    const easyButton = document.getElementById("easy");
    const mediumButton = document.getElementById("medium");
    const hardButton = document.getElementById("hard");

    if (easyButton.getAttribute("aria-pressed") === "true") {
        return "easy";
    } else if (mediumButton.getAttribute("aria-pressed") === "true") {
        return "medium";
    } else if (hardButton.getAttribute("aria-pressed") === "true") {
        return "hard";
    }
}
// ini untuk mendapatkan pokemon muncul secara acak
function randomAwan(awan) {
    const t = Math.floor(Math.random() * awan.length);
    const tRandom = awan[t];
    if (tRandom == tanahSebelumnya) {
        randomAwan(awan);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}
// ini untuk mendapatkan waktu acak antara min dan maks
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
// ini untuk membuat pokemon muncul dan menghilang
function munculkanPokemon(lihat, sembunyi) {
    const tRandom = randomAwan(awan);
    const wRandom = randomTime(lihat, sembunyi);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanPokemon(lihat, sembunyi);
        }
    }, wRandom);
}
// function untuk memulai permainan
function mulai() {
    // Mengatur kecepatan dan waktu untuk setiap level
    let lihat, sembunyi;
    const difficulty = difficultyLevel();
    if (difficulty === "easy") {
        lihat = 1000;
        sembunyi = 2000;
    } else if (difficulty === "medium") {
        lihat = 500;
        sembunyi = 1000;
    } else {
        lihat = 300;
        sembunyi = 500;
    }

    selesai = false;
    skor = 0;
    score.textContent = 0;
    munculkanPokemon(lihat, sembunyi);
    setTimeout(() => {
        selesai = true;
    }, 25000);
}
// ini untuk memperbarui skor ketika memukul pokemon
function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    score.textContent = skor;
}

// Menambahkan trigger klik ke semua pokemon
pokemon.forEach(t => {
    t.addEventListener('click', pukul);
});

// JS Halaman 3 Akhir

