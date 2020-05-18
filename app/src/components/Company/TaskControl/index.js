import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import Toolbar from '../../Toolbar';
import Main from '../../Shared/Main';
import NewTask from './NewTask';
import TaskTable from './TaskTable';
import moment from 'moment';
moment().format();
moment.locale('fi');

const CompanyTaskControl = (props) => {
    let date = moment(new Date());
    const [currentDate, setCurrentDate] = useState(date);
    const [tasks, setTasks] = useState([]);
    const [days, setDays] = useState(0);

    useEffect(() => {
        setCurrentDate(moment(new Date()).add(days, 'days'));
    }, [days]);

    //let pvm = moment(new Date()).add(days, 'days');
    //pvm = pvm.format('YYYY-MM-DD').toString();
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
