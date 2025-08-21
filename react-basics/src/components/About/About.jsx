import React from "react";
import "./About.css";

export default function About(props) {
  const { name, bio, avatar_url, followers, following, company, location } =
    props.user;
  const length = props.length;
  return (
    <section className="about-section">
      <div className="detail">
        <h1>Hello, I'm {name}</h1>
        <h3>MERN Stack Developer</h3>
        <p>{bio}</p>
        <p>{company}</p>
        <p>{location}</p>
        <div className="github-stats">
          <p className="follower">
            <span>Follower - </span>
            <span> {followers}</span>
          </p>
          <p className="follower">
            <span>Following - </span>
            <span> {following}</span>
          </p>
          <p className="follower">
            <span>Repositories - </span>
            <span> {length}</span>
          </p>
        </div>
        <button className="hire-btn">
          <a href="https://www.linkedin.com/in/akhil-sodvadiya/">Hire Me</a>
        </button>
        <button className="resume-btn">Resume</button>
      </div>

      <img src={avatar_url} alt="" />
    </section>
  );
}

// prop drilling -
