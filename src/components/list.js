import React from 'react';
import {connect} from 'react-redux';

import Task from './task';
import AddForm from './add-form';

import {addTask, completeTask} from '../actions';

export class List extends React.Component {
    addTask(text) {
        this.props.addTask(text, this.props.index);
    }

    completeTask(taskIndex) {
        this.props.completeTask(this.props.index, taskIndex);
    }

    render() {
        const tasks = this.props.tasks.map((task, index) =>
            <li key={index}>
                <Task {...task} onClick={(e) => this.completeTask({index})} />
            </li>
        );
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {tasks}
                    <li>
                        <AddForm
                            type="task"
                            onAdd={text => this.addTask(text)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};

export default connect()(List);
