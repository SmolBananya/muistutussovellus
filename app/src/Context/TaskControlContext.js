import React, { useState, createContext } from 'react';

export const TaskControlContext = createContext();

export const TaskControlProvider = (props) => {
    const [date, setDate] = useState(new Date());
    const [taskList, setTaskList] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <TaskControlContext.Provider
            value={{ TASKLIST: [taskList, setTaskList], DATE: [date, setDate], LOADING: [loading, setLoading] }}
        >
            {props.children}
        </TaskControlContext.Provider>
    );
};
