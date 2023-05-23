import './style.css';
import createGame from './modules/createGame';
import { refreshScores } from './modules/refreshScores';
import submitScore from './modules/submitScore';

let gameId; // Variable to store the ID of the created game
let isDOMContentLoadedFired = false; // Flag to track if DOMContentLoaded event has already fired

const createAndInitializeGame = async () => {
  // Create a new game
  try {
    const gameName = 'Your Game Name'; // Replace with your desired game name
    gameId = await createGame(gameName);
    console.log('Game created. ID:', gameId);
  } catch (error) {
    console.error('Failed to create the game:', error);
    return;
  }

  const refreshBtn = document.querySelector('.refresh-button');
  refreshBtn.addEventListener('click', async () => {
    // Refresh scores for the created game
    await refreshScores(gameId);
  });

  const submitBtn = document.querySelector('.submit-button');
  submitBtn.addEventListener('click', async () => {
    const userNameInput = document.querySelector('input[name="name"]');
    const scoreInput = document.querySelector('input[name="score"]');
    const userName = userNameInput.value;
    const scoreValue = scoreInput.value;

    // Validate input fields
    if (userName.trim() === '' || scoreValue.trim() === '') {
      // Display an error message or perform any desired action
      console.error('Please fill in all the fields');
      return; // Stop the function execution
    }

    // Submit a score for the created game
    await submitScore(gameId, userName, scoreValue);

    // Clear the input fields after submitting
    userNameInput.value = '';
    scoreInput.value = '';
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  if (!isDOMContentLoadedFired) {
    isDOMContentLoadedFired = true;
    await createAndInitializeGame();
  }
});