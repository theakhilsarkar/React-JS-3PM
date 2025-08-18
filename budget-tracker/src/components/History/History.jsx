import React, { useState, useEffect } from "react";
import axios from "axios";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    const res = await axios.get("http://localhost:3000/history");
    const data = res.data;
    setHistory(data);
  }

  return (
    <div>
      {history.map((transaction, index) => (
        <div key={index}>{transaction.description}</div>
      ))}
    </div>
  );
}
