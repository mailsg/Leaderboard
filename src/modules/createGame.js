/*  eslint-disable max-classes-per-file, no-useless-catch, no-unused-vars */

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const errorMsg = document.querySelector('.error-message');

const createGame = async (name) => {
  try {
    const response = await fetch(`${api}games/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    const data = await response.json();
    const gameId = data.result;
    return gameId;
  } catch (error) {
    errorMsg.textContent = `Failed to create the game: ${error}`;
    throw error;
  }
};

export default createGame;