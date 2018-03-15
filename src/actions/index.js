export const ADD_LIST = 'ADD_LIST';
export const addList = title => ({
    type: ADD_LIST,
    title
});

export const ADD_TASK = 'ADD_TASK';
export const addTask = (text, listIndex, dayIndex) => ({
    type: ADD_TASK,
    text,
    listIndex,
    dayIndex
});

export const ADD_DAY = 'ADD_DAY';
export const addDay = (title) => ({
    type: ADD_DAY,
    day: {
    	title: title,
        lists: [{
            title: 'MORNING2',
            tasks: []
        }, {
            title: 'AFTERNOON2',
            tasks: []
        }, {
            title: 'NIGHT2',
            tasks: []
        }]
    }
 
});

export const COMPLETE_TASK = 'COMPLETE_TASK';
export const completeTask = (dayIndex, listIndex, taskIndex) => ({
	type: COMPLETE_TASK,
	dayIndex,
	listIndex, 
	taskIndex
})


