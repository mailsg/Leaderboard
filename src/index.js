/*  eslint-disable max-classes-per-file, no-useless-catch, no-unused-vars */

import './style.css';
import createGame from './modules/createGame.js';
import refreshScores from './modules/refreshScores.js';
import submitScore from './modules/submitScore.js';

let gameId;
let isDOMContentLoadedFired = false;
const msg = document.querySelector('.message');

const createAndInitializeGame = async () => {
  try {
    const gameName = 'El Nino';
    gameId = await createGame(gameName);
    // console.log(gameId);
  } catch (error) {
    // console.error('Failed to create the game:', error);
    return;
  }

  const refreshBtn = document.querySelector('.refresh-button');
  refreshBtn.addEventListener('click', async () => {
    await refreshScores(gameId);
  });

  const submitBtn = document.querySelector('.submit-button');
  submitBtn.addEventListener('click', async () => {
    const userNameInput = document.querySelector('input[name="name"]');
    const scoreInput = document.querySelector('input[name="score"]');
    const userName = userNameInput.value;
    const scoreValue = scoreInput.value;

    if (userName.trim() === '' || scoreValue.trim() === '') {
      msg.textContent = 'Please fill in all the fields';
      return;
    }

    await submitScore(gameId, userName, scoreValue);
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