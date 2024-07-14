document.addEventListener('DOMContentLoaded', function () {
    const leaderboard = [
        { name: 'Alice', score: 150 },
        { name: 'Bob', score: 140 },
        { name: 'Charlie', score: 130 },
        { name: 'David', score: 120 },
        { name: 'Eve', score: 110 },
        { name: 'Frank', score: 100 },
        { name: 'Grace', score: 90 },
        { name: 'Heidi', score: 80 },
        { name: 'Ivan', score: 70 },
        { name: 'Judy', score: 60 }
    ];

    const tbody = document.querySelector('#leaderboard tbody');

    leaderboard.sort((a, b) => b.score - a.score).forEach((player, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
        `;
        tbody.appendChild(row);
    });
});
