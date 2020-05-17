import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Main from '../reuse/Main';
import Button from '../reuse/Button';
import Text from '../reuse/Text';

const CompanyMain = (props) => {
    return (
        <>
            <Main container direction='column' justify='space-between' alignItems='center'>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs={12}>
                        <Text align='center' size={46} weight={500} maincolor>
                            Tervetuloa
                        </Text>
                        <Text align='center' size={20} weight={500} maincolor>
                            {props.user.company}
                        </Text>
                    </Grid>
                </Grid>

                <Grid container direction='row' justify='center' alignItems='center' spacing={1}>
                    <Grid item xs={12}>
                        <Link to='/companytaskcontrol'>
                            <Button color={4}>Tehtävien hallinta</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to='/companytaskcontrol'>
                            <Button color={4}>Raportointi</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to='/companytaskcontrol'>
                            <Button color={4}>Tulostaulukko</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs={12}>
                        <Button
                            color={1}
                            onClick={() => {
                                props.setUser({ ...props.user, auth: false, admin: false, JWTtoken: '' });
                            }}
                        >
                            Kirjaudu ulos
                        </Button>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default CompanyMain;
