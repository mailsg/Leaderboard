const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const errorMsg = document.querySelector('.error-message');
let gameId = null;

const createGame = async (name) => {
  try {
    if (!gameId) {
      const response = await fetch(`${api}games/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      gameId = data.result;
    }
    return gameId;
  } catch (error) {
    errorMsg.textContent = `Failed to create the game: ${error}`;
    throw error;
  }
};

export default createGame;