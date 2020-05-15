import React from 'react';

// Components
import Toolbar from '../Toolbar';

// Material-UI components
import Grid from '@material-ui/core/Grid';

// Reuse
import Main from '../reuse/Main';
import Textbox from '../reuse/Textbox';
import Button from '../reuse/Button';

const CompanyTasks = () => {
    return (
        <>
            <Toolbar backarrowaction='companymain' value='Tehtävien hallinta' />
            <Main container direction='column' justify='space-around' alignItems='center'>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs={11}>
                        <Grid item xs={12}>
                            <Textbox type='text' placeholder='Yrityksen nimi' />
                        </Grid>
                        <Grid item xs={12}>
                            <Textbox type='text' placeholder='Sähköposti' />
                        </Grid>
                        <Grid item xs={12}>
                            <Textbox type='password' placeholder='Salasana' />
                        </Grid>
                        <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
                            <Grid item xs={12}>
                                <Button color={1}>Tallenna</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default CompanyTasks;
