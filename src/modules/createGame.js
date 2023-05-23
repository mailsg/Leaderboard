const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

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
    console.log('Game created. ID:', gameId);
    return gameId;
  } catch (error) {
    console.error('Failed to create the game:', error);
  }
};

export default createGame;