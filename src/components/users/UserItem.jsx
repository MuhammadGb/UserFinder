import React from "react";

export const UserItem = ({ currentUsers }) => {
  return (
    <div className="user-grid">
      {currentUsers &&
        currentUsers.map((user) => (
          <div className="card" key={user.id}>
            <div className="text-center">
              <img
                src={user.avatar_url}
                alt=""
                className="round-img"
                style={imageStyle}
              />
              <h3 className="card-text">User: {user.login}</h3>
              <h4 className="card-text">Score: {user.score}</h4>
              <h3 className="card-text">
                <a href={`${user.html_url}`}>See Profile</a>
              </h3>
            </div>
          </div>
        ))}
    </div>
  );
};

const imageStyle = {
  width: "80px",
  height: "80px",
};
