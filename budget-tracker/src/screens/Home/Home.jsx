import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetchHistory();
  }, []);

  function fetchHistory() {
    fetch("http://localhost:3000/history")
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }
  return (
    <div>
      {history.map((transaction, index) => (
        <div key={index}>{transaction.description}</div>
      ))}
    </div>
  );
}
