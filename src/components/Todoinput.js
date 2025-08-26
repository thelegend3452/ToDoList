import React from "react";

const Todoinput = ({input, setInput, addtask, setPriority}) => {
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            addtask();
        }
    }
    return (
        <div>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput (e.target.value)}
                onKeyDown={handleEnter}
                placeholder="Task..."
                required
            />
            <button onClick={addtask}>Add Task</button>
            <button className="Ubtn" onClick={() => setPriority("URGENT")}>
                Urgent
            </button>
            <button className="Pbtn" onClick={() => setPriority("PRIORITY")}>
                Priority
            </button>
            <button className="Nbtn" onClick={() => setPriority("NON-URGENT")}>
                Non-Urgent
            </button>
            </div>
    )
}
export default Todoinput