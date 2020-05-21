import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Main from '../../Shared/Main';
import Button from '../../Shared/Button';
import Text from '../../Shared/Text';
import { UserContext } from '../../../Context/UserContext';

const CompanyMain = (props) => {
    const [user, setUser] = useContext(UserContext);
    return (
        <>
            <Main container direction='column' justify='space-between' alignItems='center'>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid container item xs={12} sm={6} md={4} lg={3} spacing={1}>
                        <Grid item xs={12}>
                            <Text align='center' size={46} weight={500} maincolor>
                                Tervetuloa
                            </Text>
                            <Text align='center' size={20} weight={500} maincolor>
                                {user.company}
                            </Text>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid container item xs={12} sm={6} md={4} lg={3} spacing={1}>
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
                </Grid>

                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid container item xs={12} sm={6} md={4} lg={3} spacing={1}>
                        <Grid item xs={12}>
                            <Button
                                color={1}
                                onClick={() => {
                                    setUser({ ...user, auth: false, admin: false, JWTtoken: '' });
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
