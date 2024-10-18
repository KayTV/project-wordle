import React from 'react';

function Input({handleGuess}) {
  const [input, setInput] = React.useState();

  function handleSubmit(event) {
    event.preventDefault()
    handleGuess(input)
    setInput('')
  }

  return <div>
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" 
             type="text"
             required
             minLength={5}
             maxLength={5}
             value={input}
             onChange={event => {
              setInput(event.target.value.toUpperCase())
            }} />
    </form>
    <div>{input}</div>
  </div>;
}

export default Input;
