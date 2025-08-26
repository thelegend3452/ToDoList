const Todolist = ({ todos, deleteTask, togglecompleted, HandlePriority }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? "completed" : ""}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => togglecompleted(todo.id)}
          />
          {todo.text}
          <button onClick={() => deleteTask(todo.id)}>Delete</button>
          <span className={`priority ${todo.priority.toLowerCase()}`}>
            {todo.priority}
          </span>

          {}
          <button onClick={() => HandlePriority(todo.id)}>
            Change Priority
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Todolist