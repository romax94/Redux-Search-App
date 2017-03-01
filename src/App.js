import React, { Component } from 'react';

import { connect } from 'react-redux';


class APP extends Component {
    addTask() {

        this.props.onAddTask(this.taskInput.value);
        this.taskInput.value === '';
        console.log(this.props.store.tasks);
    }
    render() {
        return (
            <div className="app_wrapper">
                <input
                    type="text"
                    placeholder="Enter your goal"
                    className="app_form_input"
                    ref={(input) => { this.taskInput = input }}
                />
                <button onClick={this.addTask.bind(this)}>Add</button>
                <ul>
                    {this.props.store.tasks.map((task, id) =>
                        <li key={id}>{task}</li>
                    )}
                </ul>
            </div>
        )
    }
}






export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onAddTask: (task) => {
            dispatch({
                type: 'ADD_TASKS',
                payload: task
            });
        }
    })
)(APP);
