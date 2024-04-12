import { useState } from "react";

export default function NewOrderPage({user, setUser}) {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <h1>NewOrderPage</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your note"
      />
      <button  >Add Note</button>
      </>
  );
}