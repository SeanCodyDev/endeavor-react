import {ADD_DAY, ADD_TASK, ADD_LIST, COMPLETE_TASK} from '../actions';
// import * as actions from '../actions';



const initialState = {
    days: [{
        title: 'Tuesday',
        lists: [{
            title: 'MORNING',
            tasks: [{
                text: 'Review Code',
                completed: false
            }, {
                text: 'Email Accountant',
                completed: false
            }]
        }, {
            title: 'AFTERNOON',
            tasks: [{
                text: 'Book Flights',
                completed: false
            }, {
                text: 'Plan Event',
                completed: false
            }]
        }, {
            title: 'NIGHT',
            tasks: [{
                text: 'Clean Dishes',
                completed: false
            }]
        }]
    }]
};

export const trelloReducer = (state = initialState, action) => {
    console.log(action, state);

    switch (action.type) {
        case ADD_DAY:
        
            return {
                ...state,
                days: [...state.days, action.day]
            };
        case ADD_LIST:
            return Object.assign({}, state, {
                lists: [...state.lists, {
                    title: action.title,
                    tasks: []
                }]
            });
        case ADD_TASK:
            //loop through days to find relevant day
            let days = state.days.map((day, index) => {
                //return untargeted days to state
                if (index !== action.dayIndex) {
                    return day;
                } else {
                    //loop through lists to find relevant list
                    let lists = day.lists.map((list, index) => {
                        if (index !== action.listIndex) {
                            return list;
                        }
                        return Object.assign({}, list, {
                            tasks: [...list.tasks, {
                                text: action.text,
                                completed: false
                            }]
                        });
                    });
                    return Object.assign({}, day, {
                        lists
                    });
                }
                
                
            });
            return Object.assign({}, state, {
                days
            });

        case COMPLETE_TASK:
            console.log(action);


            days = state.days.map((day, dayInd) => {
                if (dayInd !== action.dayIndex) {
                    return day;
                } else {

                    let lists = day.lists.map((list, listInd) => {
                        if (listInd !== action.listIndex) {
                            return list;
                        } else {

                            let tasks = list.tasks.map((task, taskInd) => {
                                if (taskInd !== action.taskIndex.index) {
                                    return task;
                                } else {

                                    return Object.assign({}, task, {
                                        completed: !task.completed
                                    });
                                }
                            });
                            return Object.assign({}, list, {
                                tasks
                            });
                        }

                    });
                    return Object.assign({}, day, {
                        lists
                    });

                }
            });
            return Object.assign({},state, {
                days
            });

        default:
            return state
    }


    //comment out everything below
    // if (action.type === actions.ADD_BOARD) {
    //     return {
    //         ...state,
    //         boards: [...state.boards, action.board] 
    //     } 


    // } else if (action.type === actions.ADD_LIST) {
    //     return Object.assign({}, state, {
    //         lists: [...state.lists, {
    //             title: action.title,
    //             tasks: []
    //         }]
    //     });
    // } else if (action.type === actions.ADD_TASK) {
    //     let lists = state.lists.map((list, index) => {
    //         if (index !== action.listIndex) {
    //             return list;
    //         }
    //         return Object.assign({}, list, {
    //             tasks: [...list.tasks, {
    //                 text: action.text,
    //                 completed: false
    //             }]
    //         });
    //     });

    //     return Object.assign({}, state, {
    //         lists
    //     });
    // } else if (action.type === actions.COMPLETE_TASK) {

    //     let lists = state.lists.map((list, listInd) => {
    //         if (listInd !== action.listIndex) {
    //             return list;
    //         } else {

    //             let tasks = list.tasks.map((task, taskInd) => {
    //                 if (taskInd !== action.taskIndex.index) {
    //                     return task;
    //                 } else {
    //                     console.log(task);

    //                     return Object.assign({}, task, {
    //                         completed: !task.completed
    //                     });
    //                 }
    //             });
    //             return Object.assign({}, list, {
    //                 tasks
    //             });
    //         }

    //     });
    //     return Object.assign({}, state, {
    //         lists
    //     });
    // }
    // return state;
};