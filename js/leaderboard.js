const backsoundAudio = document.querySelector('#backsoundgame');
backsoundAudio.volume = 0.2;
backsoundAudio.loop = true;

document.addEventListener("DOMContentLoaded", function () {
    // Ambil data leaderboard dari local storage
    const leaderboardData = JSON.parse(localStorage.getItem("skorList")) || [];
    // Urutkan data leaderboard berdasarkan skor tertinggi
    leaderboardData.sort((a, b) => b.skor - a.skor);

    // Ambil 5 skor tertinggi
    const top5Scores = leaderboardData.slice(0, 5);

    // Tampilkan data leaderboard di tabel
    const leaderboardTable = document.getElementById("leaderboard");
    for (let i = 0; i < top5Scores.length; i++) {
        const row = leaderboardTable.insertRow(i + 1);
        const rankCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const scoreCell = row.insertCell(2);
    
        rankCell.textContent = i + 1;
        nameCell.textContent = top5Scores[i].nama.nama;
        scoreCell.textContent = top5Scores[i].skor;
    }
});


