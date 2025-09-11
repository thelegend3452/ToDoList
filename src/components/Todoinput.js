import React from "react";

const Todoinput = ({input, description, setDescription ,setInput, addtask ,setPriority}) => {
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
            <input
            type="text"
            value={description}
            onChange={(e) => setDescription (e.target.value)}
            onKeyDown={handleEnter}
            placeholder="Description..."
            required
            />
            <button onClick={addtask}>Add Task</button>
            <button className="Ubtn" onClick={() => setPriority("HIGH")}>
                High
            </button>
            <button className="Pbtn" onClick={() => setPriority("MODERATE")}>
                Moderate
            </button>
            <button className="Nbtn" onClick={() => setPriority("LOW")}>
                Low
            </button>
            </div>
    )
}
export default Todoinput