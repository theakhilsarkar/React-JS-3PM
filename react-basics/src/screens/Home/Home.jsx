import React, { useEffect, useState } from "react";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import axios from "axios";

export default function Home() {
  const [githubData, setGithubData] = useState({});
  const [repos, setRepos] = useState([]);
  // to call api one time
  useEffect(() => {
    fetchApi().then((data) => setGithubData(data));
    fetchRepos().then((data) => setRepos(data));
  }, []);

  const fetchApi = async () => {
    const res = await axios.get("https://api.github.com/users/theakhilsarkar");
    return res.data;
  };

  const fetchRepos = async () => {
    const res = await axios.get(
      "https://api.github.com/users/theakhilsarkar/repos"
    );
    return res.data;
  };

  return (
    <div>
      <About user={githubData} length={repos.length} />
      <Projects repos={repos} />
    </div>
  );
}

// Home - Data
// About
// Detail
// Follower - count
