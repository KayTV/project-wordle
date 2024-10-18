import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import React from 'react';

function Guess({guessArr}) {
  function guessFunctionColor(index, placement) {
    if (guessArr && guessArr[index]) {
      return guessArr[index][placement].status;
    }
    return;
  }

  function guessFunctionLetter(index, placement) {
    if (guessArr && guessArr[index]) {
      return guessArr[index][placement].letter;
    }
    return;
  }
  console.log(guessArr)
  return <>
    <div className="guess-results">
      {[...Array(NUM_OF_GUESSES_ALLOWED)].map((e, i) => (
        <p className="guess" key={i}>
          <span className={"cell " + guessFunctionColor(i, 0)}>{guessFunctionLetter(i, 0)}</span>
          <span className={"cell " + guessFunctionColor(i, 1)}>{guessFunctionLetter(i, 1)}</span>
          <span className={"cell " + guessFunctionColor(i, 2)}>{guessFunctionLetter(i, 2)}</span>
          <span className={"cell " + guessFunctionColor(i, 3)}>{guessFunctionLetter(i, 3)}</span>
          <span className={"cell " + guessFunctionColor(i, 4)}>{guessFunctionLetter(i, 4)}</span>
        </p>
      ))}
    </div>
  </>;
}

export default Guess;
