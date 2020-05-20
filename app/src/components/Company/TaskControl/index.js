import React, { useState, useEffect } from 'react';
import { TaskControlProvider } from '../../../Context/TaskControlContext';
import Grid from '@material-ui/core/Grid';

import Toolbar from '../../Toolbar';
import Main from '../../Shared/Main';
import NewTask from './NewTask';
import TaskTable from './TaskTable';
const CompanyTaskControl = (props) => {
    return (
        <TaskControlProvider>
            <Toolbar backarrowaction='companymenu' value='Tehtävien hallinta' />
            <Main long container direction='column' justify='flex-start' alignItems='center'>
                <Grid container direction='row' justify='center' alignItems='center' spacing={1}>
                    <TaskTable />
                    <NewTask />
                </Grid>
            </Main>
        </TaskControlProvider>
    );
};

export default CompanyTaskControl;
