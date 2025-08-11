import React, { useState } from "react";

export default function TextUtils() {
  //---------------------state--------------------------------
  const [text, setText] = useState("");
  const [length, setLength] = useState(0);
  const [wordsLength, setWordsLength] = useState(0);

  //---------------------handler function--------------------------------
  const handleText = (e) => setText(e.target.value);
  const handleCountLength = () => setLength(text.length);
  const handleCountWords = () => {
    const words = text.split(" ");
    setWordsLength(words.length);
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />

      <p>{text}</p>
      <hr />
      <button onClick={handleCountLength}>Count Length</button>
      <button onClick={handleCountWords}>Count Words</button>
      <hr />
      <h2>Text Length : {length}</h2>
      <h2>Total Words : {wordsLength}</h2>
    </div>
  );
}

// 1. count characters
// 2. count words
// 3. Uppercase
// 4. lowercase
// 5. time to read
// 6. count vowels(a,e,i,o,u)/consonant(...)
// 7. by self

// Hello
// every string is array.
// v - 2
// c - 3
