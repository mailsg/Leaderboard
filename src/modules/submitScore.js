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
    console.log('Score submitted successfully:', data.result);
    // Perform any necessary actions upon successful submission
  } catch (error) {
    console.error('Failed to submit the score:', error);
  }
};

export default submitScore;
