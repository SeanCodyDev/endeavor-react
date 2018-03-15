import React from 'react';

import './task.css';

export default function Cask(props) {
    return (
        <div className="task" style={{
      		textDecoration: props.completed ? 'line-through' : 'none'
    	}}>
        	<input type="checkbox" defaultChecked={props.completed} onChange={(e) => props.onClick()} />
            {props.text}
        </div>
    );
};

Cask.defaultProps = {
    text: '',
    completed: false
};
