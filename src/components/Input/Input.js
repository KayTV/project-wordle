import React from 'react';

function Input({handleGuess}) {
  const [input, setInput] = React.useState();

  return <div>
    <form class="guess-input-wrapper">
      <label for="guess-input">Enter guess:</label>
      <input id="guess-input" 
             type="text"
             maxLength={5}
             value={input}
             onChange={event => {
              setInput(event.target.value.toUpperCase())
            }}
             onKeyDown={event => {
              if (event.key === 'Enter') {
                event.preventDefault()
                handleGuess(event.target.value)
                setInput('')
              }
            }} />
    </form>
    <div>{input}</div>
  </div>;
}

export default Input;
