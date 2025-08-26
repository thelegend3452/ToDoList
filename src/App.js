import React, { useState } from "react";
import './App.css';
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState("NON-URGENT")

  const PriorityOrder = {
    'URGENT': 1,
    'PRIORITY': 2,
    'NON-URGENT': 3
  }

  const addtask = () => {
    if (input.trim() === "") return;

    const newtask = {
      id: Date.now(),
      text: input,
      completed: false,
      priority
    };

    setInput("");
    setTodos([...todos, newtask]);
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

      if (task.priority === "URGENT") {
        newPriority = "PRIORITY";
      } else if (task.priority === "PRIORITY") {
        newPriority = "NON-URGENT";
      } else {
        newPriority = "URGENT";
      }

      return { ...task, priority: newPriority };
    }
    return task;
  });

  setTodos(updatedTasks);
};



  const completedCount = todos.filter((task) => task.completed).length;

  return (
    <div className="container">
      <h1>TodoList</h1>
      <h2 className="rem">
        You have <span className="remaning">{todos.length}</span>{" "}
        {todos.length === 1 ? 'task' : 'tasks'}
      </h2>
      
      <h2 className="comp">
        <span className="task-count">{completedCount}</span> completed
      </h2>

      <Todoinput input={input} setInput={setInput} addtask={addtask} setPriority={setPriority}/>
      <Todolist todos={[...todos].sort((a, b) => {
        if (a.completed  !== b.completed) {
          return a.completed ? 1: -1;
        }
        return PriorityOrder[a.priority] - PriorityOrder[b.priority]
      })} 
      deleteTask={deletetask} togglecompleted={togglecompleted} HandlePriority={HandlePriority} />
    </div>
  );
};

export default App;
