document.addEventListener('DOMContentLoaded', async function () {
    const leaderboardUrl = 'https://cj-ml-word-game.herokuapp.com/leaderboard';

    async function fetchLeaderboard() {
        const response = await fetch(leaderboardUrl);
        return response.json();
    }

    async function displayLeaderboard() {
        const leaderboard = await fetchLeaderboard();
        const tbody = document.querySelector('#leaderboard tbody');
        tbody.innerHTML = ''; // Clear existing rows
        leaderboard.forEach((player, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.score}</td>
            `;
            tbody.appendChild(row);
        });
    }

    displayLeaderboard();
});
