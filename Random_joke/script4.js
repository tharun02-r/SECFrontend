const jokeDisplay = document.getElementById('jokeDisplay');
const getJokeButton = document.getElementById('getJoke');
const nextJokeButton = document.getElementById('nextJoke');

async function getJoke() {
  jokeDisplay.innerHTML = "Loading a funny joke...";
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const joke = await response.json();
    return joke;
  } catch (error) {
    console.error(error);
    jokeDisplay.innerHTML = "Couldn’t fetch a joke, please try again!";
  }
}

function displayJoke(joke) {
  if (joke) {
    // show joke in body
    jokeDisplay.innerHTML = `
      <p>${joke.setup}</p>
      <p><strong>${joke.punchline}</strong></p>
    `;

    // also change <title> dynamically (head content)
    document.title = joke.setup; // ← this changes <head><title>
  }
}

// Buttons
getJokeButton.addEventListener('click', async () => {
  const joke = await getJoke();
  displayJoke(joke);
});

nextJokeButton.addEventListener('click', async () => {
  const joke = await getJoke();
  displayJoke(joke);
});

// First load
window.addEventListener('DOMContentLoaded', async () => {
  const joke = await getJoke();
  displayJoke(joke);
});