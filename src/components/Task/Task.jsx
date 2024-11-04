
import  { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from "prop-types";





export default class Task extends Component {
    state = {
        isEdit: false,
        newText: this.props.task.text,
        updateInterval:10000,
    };




    handleEdit = () => {
        this.setState((prevState) => ({
            isEdit: !prevState.isEdit,
            newText: this.props.task.text,
        }));
    };


    textChange = (e) => {
        this.setState({ newText: e.target.value });
    };


    textSubmit = (e) => {
        e.preventDefault();
        const { onEdit, task } = this.props;
        const { newText } = this.state;

        if (newText.trim()) {
            onEdit(task.id, newText.trim());
            this.handleEdit();
        }
    };



    render() {

        const { task, onToggleCompleted, onDeleted} = this.props;
        const { isEdit, newText } = this.state;
        const completed = task.completed;
        const date  = task.date;


        const classNames = completed ? 'li completed' : 'li';

        return (
            <li className={classNames} onClick={onToggleCompleted}>
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
                        checked={completed}
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
        );
    }
}




    Task.defaultProps = {
    task: {},
    };

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
