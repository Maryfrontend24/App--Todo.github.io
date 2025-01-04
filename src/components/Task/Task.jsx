
import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from "prop-types";
import TimerTask from "../Timer/TimerTask.jsx";




export default class Task extends React.Component {
    state = {
        isEdit: false,
        newText: this.props.task.text,
        updateInterval: 10000,
        timerId: null,
        seconds: 0,
        isRunning: false,
    };

    handleEdit = () => {
        this.setState(prevState => ({
            isEdit: !prevState.isEdit,
            newText: prevState.task.text,
        }));
    };

    textChange = (e) => {
        this.setState({ newText: e.target.value });
    };

    textSubmit = (e) => {
        e.preventDefault();
        const { onEdit } = this.props;
        const { newText } = this.state;

        if (newText.trim()) {
            onEdit(this.props.task.id, newText.trim());
            this.handleEdit();
        }
    };

    startTimer = () => {
        this.setState({
            timerId: setInterval(() => {
                this.setState(prevState => ({
                    seconds: prevState.seconds + 1,
                    isRunning: true
                }));
            }, 1000)
        });
    };

    stopTimer = () => {
        clearInterval(this.state.timerId);
        this.setState({
            timerId: null,
            seconds: 0,
            isRunning: false
        });
    };

    componentDidUpdate(prevProps) {
        // Если задача была завершена и таймер был запущен
        if (prevProps.task.completed === false && this.props.task.completed && this.state.isRunning) {
            this.stopTimer();
        }
    }

    render() {
        const { task, onToggleCompleted, onDeleted } = this.props;
        const { isEdit, newText, seconds, isRunning } = this.state;
        const date = task.date;

        const classNames = task.completed ? 'li completed' : 'li';

        return (
            <>
                <li className='li line'>
                    <TimerTask
                        task={task}
                        startTimer={this.startTimer}
                        stopTimer={this.stopTimer}
                        seconds={seconds}
                        isRunning={isRunning}
                    />
                </li>
                <div></div><br/>
                <li className={classNames} onClick={() => onToggleCompleted(task.id)}>
                    <div className='view'>
                        {isEdit ? (
                            <form onSubmit={this.textSubmit}>
                                <input
                                    type="text"
                                    className='edit-input'
                                    value={newText}
                                    onChange={this.textChange}
                                    autoFocus
                                />
                                <button type="submit" className="save-btn">Save</button>
                                <button type="button" onClick={this.handleEdit}>Cancel</button>
                            </form>
                        ) : (
                            <>
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={task.completed}
                                    readOnly
                                />
                                <label>
                                    <span className="description">{task.text}</span>
                                    <span className="created">{`created ${formatDistanceToNow(date, {
                                        includeSeconds: true,
                                        addSuffix: true,
                                    })}`}</span>
                                </label>
                                <button className="icon icon-edit" onClick={this.handleEdit}></button>
                                <button className="icon icon-destroy" onClick={onDeleted}></button>
                            </>
                        )}
                    </div>
                </li>
            </>
        );
    }
}





Task.propTypes = {
                                task: PropTypes.shape({
                                id: PropTypes.number,
                                text: PropTypes.string,
                                completed: PropTypes.bool,
                                date: PropTypes.instanceOf(Date),
                            }),
                                onDeleted: PropTypes.func.isRequired,
                                textChange: PropTypes.func,
                                onToggleCompleted: PropTypes.func.isRequired,
                                handleEdit: PropTypes.func,
                                onEdit: PropTypes.func.isRequired,
                            }

