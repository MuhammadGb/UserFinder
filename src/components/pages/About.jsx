import React, { Fragment } from "react";

export const About = () => {
  const url = {
    GITHUB_USER_FINDER_URL: "https://github.com/MuhammadGb/UserFinder",
  };

  return (
    <Fragment>
      <div className="card">
        <div className="text-center">
          <h1>About This App</h1>
          <p style={{ marginTop: "0.5rem" }}>App to search GitHub users</p>
          <p style={{ marginTop: "0.3rem" }}>Version 1.0.2</p>
          <p style={{ marginTop: "0.5rem" }}>
            <i className="fab fa-github"></i>{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={url.GITHUB_USER_FINDER_URL}
            >
              Github Repo
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
