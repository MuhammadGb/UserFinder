import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

export const Search = () => {
  const { searchUsers, users, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "" || text === null) {
      setAlert("Please enter something", "danger");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <h1 className="text-darkBlue">Github</h1>
      <h4 className="subtitle">Search for user profiles here:</h4>
      <form onSubmit={onSubmit} className="forms">
        <input
          type="text"
          name="text"
          placeholder="Enter a username"
          value={text}
          onChange={onChange}
        />
        <button type="submit" value="search" className="btn search-btn">
          Search
        </button>

        {users.length > 0 && (
          <button
            className="btn btn-light btn-block clear-btn"
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};
