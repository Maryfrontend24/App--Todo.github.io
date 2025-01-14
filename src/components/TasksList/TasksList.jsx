import Task from "../Task/Task.jsx";



const TasksList =({ tasks, removeTask, editTask, onToggleCompleted })=> {
        return (
            <ul className="todo-list">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        text={task.text}
                        onToggleCompleted={() => onToggleCompleted(task.id)}
                        removeTask={() => removeTask(task.id)}
                        editTask={(newText) => editTask(task.id, newText)}
                    />
                ))}
            </ul>
        );

}


export default TasksList;


