import React, { useEffect, useState } from "react";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import axios from "axios";

export default function Home() {
  const [githubData, setGithubData] = useState({});
  // to call api one time
  useEffect(() => {
    fetchApi().then((data) => setGithubData(data));
  }, []);

  const fetchApi = async () => {
    const res = await axios.get("https://api.github.com/users/theakhilsarkar");
    return res.data;
  };

  return (
    <div>
      <About user={githubData} />
      <Projects />
    </div>
  );
}

// Home - Data
// About
// Detail
// Follower - count
