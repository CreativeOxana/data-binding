import { useState } from 'react';

/*
Zadání: Přidejte na prvek `input` událost `onChange`, která bude do stavu `login` ukládat aktuální
  hodnotu, kterou uživatel do inputu napíše.
*/

export const Ukol1 = () => {
  const [input, setInput] = useState('petr');

  const inputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <label>
        Login:
        <input type="text" value={input} onChange={inputChange} />
      </label>
    </>
  );
};
