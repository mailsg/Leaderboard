/*  eslint-disable max-classes-per-file, no-useless-catch, no-unused-vars */

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

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
    // console.log(data.result);
  } catch (error) {
    // console.error('Failed to submit the score:', error);
  }
};

export default submitScore;
