import React, { useState, useEffect } from "react";
import './styles/App.css';
import './styles/mobile.css'
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const save_task = localStorage.getItem("todos");
    if (save_task) {
      return JSON.parse(save_task).map(task => ({
        ...task,
        createdAt: new Date(task.createdAt),
      }));
    }
    return [];
  });
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("LOW")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const PriorityOrder = {
    'HIGH': 1,
    'MODERATE': 2,
    'LOW': 3
  }

  const addtask = () => {
    if (input.trim() === "") return;

    const newtask = {
      id: Date.now(),
      text: input,
      description: description,
      completed: false,
      priority,
      createdAt: new Date(),
    };

    setInput("");
    setTodos([...todos, newtask]);
    setDescription("");
  };


  const deletetask = (id) => {
    const updatedTasks = todos.filter(task => task.id !== id);
    setTodos(updatedTasks);
  };

  const togglecompleted = (id) => {
    const updated = todos.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTodos(updated);
  };
  const HandlePriority = (id) => {
  const updatedTasks = todos.map((task) => {
    if (task.id === id) {
      let newPriority;

      if (task.priority === "HIGH") {
        newPriority = "MODERATE";
      } else if (task.priority === "MODERATE") {
        newPriority = "LOW";
      } else {
        newPriority = "HIGH";
      }

      return { ...task, priority: newPriority };
    }
    return task;
  });

  setTodos(updatedTasks);
};



  const completedCount = todos.filter((task) => task.completed).length;
  const remaningCount = todos.filter((task ) => !task.completed).length

  return (
    <div className="container">
      <h1>TodoList</h1>
      <h2 className="rem">
        You have <span className="remaning">{remaningCount}</span>{" "}
        {remaningCount === 1 ? 'task' : 'tasks'}
      </h2>
      
      <h2 className="comp">
        <span className="task-count">{completedCount}</span> completed
      </h2>




      <Todoinput input={input} setInput={setInput} addtask={addtask} description={description} setDescription={setDescription} setPriority={setPriority}/>
      <li className="pending"><h3>Pending</h3></li>
      {todos.length === 0 ? (
          <p className="blanktext">You have nothing to do, add a task</p>
      ) : (
      <Todolist todos={[...todos].filter(task => !task.completed).sort((a, b) => PriorityOrder[a.priority] - PriorityOrder[b.priority])}
                deleteTask={deletetask}
                togglecompleted={togglecompleted}
                HandlePriority={HandlePriority}
      />
      )}
      <li className="finished"><h3>Completed</h3></li>

          {todos.length > 0 && todos.every(todo => todo.completed) && (
              <p className="blanktext">You have completed all tasks</p>
              )}
          <Todolist
          todos={todos.filter(task => task.completed)}
          deleteTask={deletetask}
          togglecompleted={togglecompleted}
          HandlePriority={HandlePriority}
          />


    </div>
  );
};

export default App;
