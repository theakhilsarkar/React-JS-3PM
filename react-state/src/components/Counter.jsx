import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //    [state, stateUpdate] = useState(default value of state);

  const add = () => {
    let temp = count;
    temp++;
    setCount(temp);
  };

  const min = () => {
    let temp = count;
    temp--;
    setCount(temp);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={min}>-1</button>
    </div>
  );
}

// add ++
// min --
// 2x
// /2
