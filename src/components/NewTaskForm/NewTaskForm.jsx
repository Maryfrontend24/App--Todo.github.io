import React, { useState } from 'react';


const NewTaskForm = (props)=>{
const [newTextTask, setNewTextTask] = useState("");

const onLabelChange=(e)=>{
    const value = e.target.value;
    setNewTextTask(value.trim());

}

    const onSubmit = (e) => {
        e.preventDefault();

        if (!newTextTask.trim()) {
            return;
        }
        setNewTextTask('');

        props.addTask(newTextTask);
    };


    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !newTextTask.trim()) {
            e.preventDefault();
        }
    };


    return (
        <form className="todo-form"
              onSubmit={onSubmit}
        >
            <input type="text"
                   className="new-todo"
                   onChange={onLabelChange}
                   placeholder="My daily routine..."
                   autoFocus
                   value={newTextTask}
                   onKeyPress={handleKeyPress}
            />
        </form>

    )
}

export default NewTaskForm;
