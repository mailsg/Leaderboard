const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const errorMsg = document.querySelector('.error-message');

const refreshScores = async (gameId) => {
  try {
    const response = await fetch(`${api}games/${gameId}/scores/`);
    const data = await response.json();
    const scores = data.result;
    const tableBody = document.querySelector('.table');
    tableBody.innerHTML = '';

    if (scores.length === 0) {
      const noDataMessage = document.createElement('tr');
      noDataMessage.innerHTML = `
        <td colspan="2">No data found</td>
      `;
      tableBody.appendChild(noDataMessage);
    } else {
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
    errorMsg.textContent = `Failed to create the game: ${error}`;
  }
};
export default refreshScores;