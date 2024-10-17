import Input from '../Input';
import React from 'react';
import { WORDS } from '../../data';
import { sample } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState([]);

  function handleGuess(input) {
    const guessArray = [...guess, input]
    setGuess(guessArray)
  }

  return <>
    <div class="guess-results">
      {guess.map((value) => (
        <p class="guess">{value}</p>
      ))}
    </div>
    <Input handleGuess={handleGuess} />
  </>;
}

export default Game;
