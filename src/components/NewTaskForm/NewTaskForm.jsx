import {Component} from "react";
import PropTypes from "prop-types";

export default class NewTaskForm extends Component {
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdd(this.state.label);
        this.setState({
            label: ''
        })
    }


    render() {
        return (
            <form className="todo-form"
                  onSubmit={this.onSubmit}
            >
                <input type="text" className="new-todo"
                       onChange={this.onLabelChange}
                       placeholder="My daily routine..." autoFocus
                       value={this.state.label}
                />
            </form>

        )
    }

}

NewTaskForm.defaultProps = {
    placeholder: 'My daily routine...',
};

NewTaskForm.propTypes = {
    onItemAdd: PropTypes.func.isRequired,
}
