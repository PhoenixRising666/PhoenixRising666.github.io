document.addEventListener('DOMContentLoaded', async function () {
    const leaderboardUrl = 'https://cj-ml-word-game-351479244e3e.herokuapp.com/leaderboard';

    async function fetchLeaderboard() {
        const response = await fetch(leaderboardUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    }

    async function displayLeaderboard() {
        try {
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
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    }

    displayLeaderboard();
});
