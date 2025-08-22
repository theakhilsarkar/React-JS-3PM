import React from "react";
import "./Projects.css";

export default function Projects(props) {
  const reposList = props.repos;
  return (
    <>
      <section className="project-section">
        <div className="grid">
          {reposList.map((repo, index) => {
            const { name, html_url, language } = repo;

            if (index <= 10) {
              return (
                <div key={index} className="box">
                  <h2>{name}</h2>
                  <div className="btn-row">
                    <button>{language ?? "Pro."}</button>
                    <button>
                      <a href={html_url}>Link</a>
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
}

// github
