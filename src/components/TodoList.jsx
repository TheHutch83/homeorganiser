import React, { useState } from "react";

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const addToDo = () => {
    if (toDo.trim()) {
      setToDos([...toDos, toDo]);
      setToDo("");
    }
  };

  const removeToDo = (index) => {
    const updatedToDos = toDos.filter((item, i) => i !== index);
    setToDos(updatedToDos);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addToDo}>Add Task</button>

      <ul>
        {toDos.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeToDo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
