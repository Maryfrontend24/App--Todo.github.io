import Task from "../Task/Task.jsx";
import { Component } from 'react';
import PropTypes from "prop-types";

export default class TasksList extends Component {
    render() {
        const { tasks, onToggleCompleted, onDeleted, onEdit } = this.props;

        return (
            <ul className="todo-list">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onEdit={onEdit}
                        onToggleCompleted={() => onToggleCompleted(task.id)}
                        onDeleted={() => onDeleted(task.id)}
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