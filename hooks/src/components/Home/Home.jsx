import React, { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  // API Calling
  useEffect(() => {
    // api calls
    // data - pre ready
    console.log("use effect called ...");
  });

  // state change --> update
  useEffect(() => {
    console.log("state changed...method called...");
  }, [count]);

  //

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setCount(2)}>+</button>
    </div>
  );
}

//displaytodo();

// 1. useEffect
// 2. state
// 3. components

// 

