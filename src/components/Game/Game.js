import Guess from '../Guess/Guess';
import Input from '../Input';
import React from 'react';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState([]);
  const [guessArr, setGuessArr] = React.useState([]);
  const [winBanner, setWinBanner] = React.useState(false);
  const [loseBanner, setLoseBanner] = React.useState(false);

  function handleGuess(input) {
    if (guess.length <= 5) {
      const guessArray = [...guess, input]
      splitGuess(input)
      setGuess(guessArray)
    }
    if (guess.length >= 5 && !winBanner) {
      setLoseBanner(true);
    }
    return;
  }

  function splitGuess(input) {
    const guessSplit = checkGuess(input, answer);
    const newArr = [...guessArr, guessSplit];
    const lookForCorrectAnswer = guessSplit.filter(value => value.status === 'incorrect' || value.status === 'misplaced');

    if (lookForCorrectAnswer.length === 0) {
      setWinBanner(true);
    }

    setGuessArr(newArr);
  }

  function bannerMessage() {
    if (winBanner) {
      return <div className="happy banner">
              <p>
                <strong>Congratulations!</strong> Got it in
                <strong> {guess.length} guesses</strong>.
              </p>
            </div>
    }
    if (loseBanner) {
      return <div className="sad banner">
              <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </div>
    }
    return;
  }

  return <>
    {/* <div className="guess-results">
      {guess.map((value) => (
        <p className="guess">
          {value.split('').map((letter)=> (
            <span className="cell">{letter}</span>
          ))}
        </p>
      ))}
    </div> */}
    <Guess guessArr={guessArr} />
    <Input handleGuess={handleGuess} />
    {bannerMessage()}
  </>;
}

export default Game;
