import React from "react";

const Profiles = ({ name, tasks }) => {
  return (
    <div>
      <h2>{name}'s Profile</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profiles;
