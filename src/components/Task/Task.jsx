import React, {useState} from 'react';
import TimerTask from "../Timer/TimerTask.jsx";



function Task({ task, onToggleCompleted, removeTask, editTask, text }) {
    const [isEdit, setIsEdit] = useState(false);
    const [newTextTask, setNewTextTask] = useState(text);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);


    const handleEdit = () => {
        setIsEdit(!isEdit);
        setNewTextTask(text);
    };

    const textChange = (e) => {
        setNewTextTask(e.target.value);
    };

    const textSubmit = (e) => {
        e.preventDefault();
        if (newTextTask.trim()) {
            editTask(task.id, newTextTask.trim());
            setIsEdit(false);
        }
    };

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const classNames = task.completed ? 'inp-cbx completed' : 'inp-cbx';



    return (
        <li className='li'>
            <div className='view'>
                { isEdit ? (
                    <form onSubmit={textSubmit}>
                        <input
                            type="text"
                            className='edit-input'
                            value={newTextTask}
                            onChange={textChange}
                            autoFocus
                        />
                        <button type="submit" className="save-btn">Save</button>
                        <button type="button" onClick={handleEdit}>Cancel</button>
                    </form>
                ) : (
                    <>
                        <input
                            id={task.id}
                            type="checkbox"
                            checked={task.completed}
                            className={classNames}
                            onChange={() => onToggleCompleted(task.id)}
                        />
                        <label className="cbx" htmlFor={task.id}>
              <span>
                <svg width="12px" height="9px" viewBox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
                            <span className="description">{newTextTask}</span>
                        </label>
                        <TimerTask
                            task={task}
                            startTimer={startTimer}
                            stopTimer={stopTimer}
                            seconds={seconds}
                            setSeconds={setSeconds}
                            isRunning={isRunning}
                        />
                        <button className="icon icon-edit" onClick={handleEdit}></button>
                        <button className="icon icon-destroy" onClick={removeTask}></button>
                    </>
                )}
            </div>
        </li>
    );
}

export default Task;
