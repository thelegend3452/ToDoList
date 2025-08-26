import React from "react";

const Tododisplay = (todo, ondelete) => {
    return (
        <li key={todo.id}>{todo.text}
          <button onClick={() => ondelete(todo.id)}>Delete Task</button>
        </li>
    )
}
export default Tododisplay