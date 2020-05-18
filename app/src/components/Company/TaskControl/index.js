import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import Toolbar from '../../Toolbar';
import Main from '../../Shared/Main';
import NewTask from './NewTask';
import TaskTable from './TaskTable';
import moment from 'moment';
const CompanyTaskControl = (props) => {
    let date = moment(new Date());
    const [currentDate, setCurrentDate] = useState(moment(date).add(1, 'days'));
    const [tasks, setTasks] = useState([]);
    const [days, setDays] = useState(0);

    return (
        <>
            <Toolbar backarrowaction='companymenu' value='Tehtävien hallinta' />
            <Main long container direction='column' justify='flex-start' alignItems='center'>
                <Grid container direction='row' justify='center' alignItems='center' spacing={1}>
                    <TaskTable
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                        days={days}
                        setDays={setDays}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                    <NewTask
                        currentDate={currentDate}
                        tasks={tasks}
                        days={days}
                        setTasks={setTasks}
                        JWTtoken={props.user.JWTtoken}
                    />
                </Grid>
            </Main>
        </>
    );
};

export default CompanyTaskControl;