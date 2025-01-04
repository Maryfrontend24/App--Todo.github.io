import {Component} from "react";
import PropTypes from "prop-types";
import React, { useState } from 'react';

export default class NewTaskForm extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        const value = e.target.value;
        this.setState({
            label: value.trim()
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label === '') {
            return;
        }
        this.props.onItemAdd(this.state.label);
        this.setState({
            label: ''
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter' && this.state.label === '') {
            e.preventDefault();
        }
    }

    render() {
        return (
            <form className="todo-form"
                  onSubmit={this.onSubmit}
            >
                <input type="text"
                       className="new-todo"
                       onChange={this.onLabelChange}
                       placeholder="My daily routine..."
                       autoFocus
                       value={this.state.label}
                       onKeyPress={this.handleKeyPress}
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
