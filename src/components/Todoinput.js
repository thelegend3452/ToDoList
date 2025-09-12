import React, { useRef } from "react";

const Todoinput = ({ input, description, setDescription, setInput, addtask, setPriority }) => {

    const taskInputRef = useRef(null);

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            addtask();
        }
    };

    const handlePrioritySelect = (priority) => {
        setPriority(priority);
        if (taskInputRef.current) {
            taskInputRef.current.focus();
        }
    };

    return (
        <div>
            <input
                ref={taskInputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleEnter}
                placeholder="Task..."
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={handleEnter}
                placeholder="Description..."
                required
            />
            <button onClick={addtask}>Add Task</button>

            <button className="Ubtn" onClick={() => handlePrioritySelect("HIGH")}>
                High
            </button>
            <button className="Pbtn" onClick={() => handlePrioritySelect("MODERATE")}>
                Moderate
            </button>
            <button className="Nbtn" onClick={() => handlePrioritySelect("LOW")}>
                Low
            </button>
        </div>
    );
};

export default Todoinput;