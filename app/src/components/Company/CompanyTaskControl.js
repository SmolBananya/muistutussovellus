import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Toolbar from '../Toolbar';
import Main from '.././reuse/Main';
import CompanyNewTask from './CompanyNewTask';
import CompanyTaskTable from './CompanyTaskTable';

const CompanyTaskControl = () => {
    return (
        <>
            <Toolbar backarrowaction='companymain' value='Tehtävien hallinta' />
            <Main long container direction='column' justify='flex-start' alignItems='center'>
                <Grid container direction='row' justify='center' alignItems='center' spacing={1}>
                    <CompanyTaskTable />
                    <CompanyNewTask />
                </Grid>
            </Main>
        </>
    );
};

export default CompanyTaskControl;
