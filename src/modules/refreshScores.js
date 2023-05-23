const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const refreshScores = async (gameId) => {
  try {
    const response = await fetch(api + `games/${gameId}/scores/`);
    const data = await response.json();
    const scores = data.result;
    console.log('Scores:', scores);

    const tableBody = document.querySelector('.table');
    tableBody.innerHTML = ''; // Clear the existing table content

    if (scores.length === 0) {
      // If no scores are available, display a "No data found" message
      const noDataMessage = document.createElement('tr');
      noDataMessage.innerHTML = `
        <td colspan="2">No data found</td>
      `;
      tableBody.appendChild(noDataMessage);
    } else {
      // Update your HTML table with the retrieved scores
      scores.forEach((score) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${score.user}</td>
          <td>${score.score}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  } catch (error) {
    console.error('Failed to fetch scores:', error);
  }
};
export { refreshScores };