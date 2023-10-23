// JS Page 3 Awal
const awan = document.querySelectorAll(".img");
const score = document.querySelector(".score");
const pop = document.querySelector('#pop');

const gambarPokemon = ["/img/pokemon1.png", "/img/pokemon2.png", "/img/pokemon3.png"];

const awanElements = document.querySelectorAll(".img");

for (let i = 0; i < awanElements.length; i++) {
  const awan = awanElements[i];
  const newImage = document.createElement("div");
  newImage.classList.add("pokemon");

  const randomimg = gambarPokemon[Math.floor(Math.random() * gambarPokemon.length)];
  newImage.style.backgroundImage = `url(${randomimg})`;

  awan.appendChild(newImage);
}

const pokemon = document.querySelectorAll(".pokemon");
console.log(pokemon);

let tanahSebelumnya;
let selesai;
let skor;


function randomAwan(awan) {
    const t = Math.floor(Math.random() * awan.length);
    const tRandom = awan[t];
    if (tRandom == tanahSebelumnya) {
        randomAwan(awan);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanPokemon() {
    const tRandom = randomAwan(awan);
    const wRandom = randomTime(1000, 2000);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanPokemon();
        }
    }, wRandom);
}
function mulai() {
    selesai = false;
    skor = 0;
    score.textContent = 0;
    munculkanPokemon();
    setTimeout(() => {
        selesai = true;
    }, 15000);
}

function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    score.textContent = skor;
}

pokemon.forEach(t => {
    t.addEventListener('click', pukul);
});

// JS page 3 Akhir
