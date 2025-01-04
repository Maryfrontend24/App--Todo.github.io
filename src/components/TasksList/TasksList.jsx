import Task from "../Task/Task.jsx";
import { Component } from 'react';
import PropTypes from "prop-types";


export default class TasksList extends Component {
    render() {
        const { tasks, onDeleted, onEdit, onToggleCompleted } = this.props;

        return (
            <ul className="todo-list">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onToggleCompleted={() => onToggleCompleted(task.id)}
                        onDeleted={() => onDeleted(task.id)}
                        onEdit={(newText) => onEdit(task.id, newText)}
                    />
                ))}
            </ul>
        );
    }
}





TasksList.defaultProps = {
    tasks: {},

}

TasksList.propTypes = {
    tasks: PropTypes.any,
    onToggleCompleted: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
};