/*  eslint-disable max-classes-per-file, no-useless-catch, no-unused-vars */

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const insertDataMsg = document.querySelector('.score-message');
const errorMsg = document.querySelector('.error-message');

const submitScore = async (gameId, user, score) => {
  try {
    const response = await fetch(`${api}games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });
    const data = await response.json();
    insertDataMsg.textContent = `${data.result} and ${gameId}`;
  } catch (error) {
    errorMsg.textContent = `Failed to create the game: ${error}`;
  }
};

export default submitScore;
