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

// Mengambil elemen-elemen dari DOM
const namaInput = document.getElementById("namaPemain");

const simpanButton = document.getElementById("simpanNama");

// Mendapatkan daftar nama pemain dari local storage
let namaPemainList = JSON.parse(localStorage.getItem("namaPemainList")) || [];

// Menambahkan event listener pada tombol "Simpan Nama"
simpanButton.addEventListener("click", function() {
    const nama = namaInput.value;
    if (nama) {
        let namaPemainList = {
            nama:nama
        }
        localStorage.setItem("namaPemainList", JSON.stringify(namaPemainList));
        alert("Nama pemain telah disimpan!");
    } else {
        alert("Harap masukkan nama sebelum menyimpan.");
    }
});

