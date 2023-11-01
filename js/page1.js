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
const letsPlayButton = document.querySelector(".btn");

// Menambahkan event listener pada tombol "Simpan Nama"
simpanButton.addEventListener("click", function(event) {
    event.preventDefault(); // Menghentikan perilaku default dari tombol "submit".
    const nama = namaInput.value;
    if (nama) {
        let namaPemainList = {
            nama: nama
        }
        localStorage.setItem("namaPemainList", JSON.stringify(namaPemainList));
        alert("Nama pemain telah disimpan!");
        // Aktifkan tombol "Let's Play" setelah nama disimpan
        letsPlayButton.removeAttribute("disabled");
    } else {
        alert("Harap isi nama terlebih dahulu.");
    }
});

// Menambahkan event listener pada tombol "Let's Play"
letsPlayButton.addEventListener("click", function() {
    // Cek apakah tombol "Let's Play" diaktifkan (setelah nama disimpan)
    if (!letsPlayButton.hasAttribute("disabled")) {
        // Arahkan ke halaman page3.html
        location.href = 'page3.html';
    } else {
        alert("Harap isi nama terlebih dahulu.");
    }
});
