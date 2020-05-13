import React from 'react';
import { Link, Redirect } from 'react-router-dom';

// Material-UI components
import Grid from '@material-ui/core/Grid';

// Reuse
import Main from '../reuse/Main';
import Button from '../reuse/Button';
import Text from '../reuse/Text';

const CompanyMain = (props) => {
    return (
        <>
            <Main container direction='column' justify='space-around' alignItems='center'>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs={11}>
                        <Grid item xs={12}>
                            <Text align='center' size={46} weight={500} maincolor>
                                Tervetuloa
                            </Text>
                            <Text align='center' size={20} weight={500} maincolor>
                                {props.user.company}
                            </Text>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs={11}>
                        <Grid item xs={12}>
                            <Link to='/companytasks'>
                                <Button color={4}>Tehtävien hallinta</Button>
                            </Link>
                            <Button color={4}>Raportointi</Button>
                            <Button color={4}>Tulostaulukko</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs={11}>
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
                </Grid>
            </Main>
        </>
    );
};

export default CompanyMain;
