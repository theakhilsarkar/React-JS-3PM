import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";

export default function Dashboard() {
  const [history, setHistory] = useState([]);
  const [income, setIncome] = useState(0);
  const [expanse, setExpanse] = useState(0);

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    const res = await axios.get("http://localhost:3000/history");
    const data = res.data;
    setHistory(data);
  }

  return (
    <div className="dashboard">
      {history.map((tr) => (
        <div className="box">{tr.amount}</div>
      ))}
    </div>
  );
}
