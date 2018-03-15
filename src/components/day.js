import React from 'react';
import {connect} from 'react-redux';

import List from './list';
import AddForm from './add-form';

import {addList, addDay, addTask, completeTask} from '../actions';

import './day.css';

export class Day extends React.Component {
    addList(title) {
        this.props.dispatch(addList(title));
    }

    addDay(){
        this.props.dispatch(addDay());
    }

    addTask(text, listIndex) {
        this.props.dispatch(addTask(text, listIndex, this.props.index));
    }

    completeTask(listIndex, taskIndex){
        this.props.dispatch(completeTask(this.props.index, listIndex, taskIndex))
    }

    render() {
        const lists = this.props.lists.map((list, index) => (
            <li className="list-wrapper" key={index}>
                <List 
                    index={index} {...list} 
                    addTask={(text, listIndex) => this.addTask(text, listIndex)} 
                    completeTask={(listIndex, taskIndex) => this.completeTask(listIndex, taskIndex)} 
                />
            </li>
        ));

        return (
            <div className="day">
                <h3>{this.props.title}</h3>
                <ul className="lists">
                    {lists}
                    <li className="add-list-wrapper">
                        <AddForm
                            type="list"
                            onAdd={title => this.addList(title)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

Day.defaultProps = {
    title: 'Today'
};

const mapStateToProps = state => ({
    // lists: state.boards.lists
});

export default connect(mapStateToProps)(Day);
