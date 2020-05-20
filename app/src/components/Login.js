import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import API from '../Actions/API';
import Textbox from '../Components/Shared/Textbox';
import Logo from '../Components/Shared/Logo';
import Button from '../Components/Shared/Button';
import Main from '../Components/Shared/Main';
import { UserContext } from '../Context/UserContext';

const Login = (props) => {
    let history = useHistory();
    const [user, setUser] = useContext(UserContext);
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    return (
        <>
            <Main
                bgcolor='#000e52'
                container
                direction='column'
                justify={window.innerHeight < 300 ? 'flex-start' : 'space-around'}
                alignItems='center'
            >
                <Grid container direction='row' justify='center' alignItems='center' spacing={1}>
                    <Grid item xs={12} lg={3}>
                        <Logo src={require('../Images/PointFightLogo.png')} />
                    </Grid>

                    <Grid container justify='center' alignItems='center' item xs={12}>
                        <Grid item xs={12} lg={3}>
                            <Textbox
                                type='text'
                                placeholder='Käyttäjätunnus'
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                        </Grid>
                    </Grid>

                    <Grid container justify='center' alignItems='center' item xs={12}>
                        <Grid item xs={12} lg={3}>
                            <Textbox
                                type='password'
                                placeholder='Salasana'
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                        </Grid>
                    </Grid>

                    <Grid container justify='center' alignItems='center' item xs={12} lg={3} spacing={1}>
                        <Grid item xs={6} lg={6}>
                            <Link to='/userregister' style={{ width: '100%' }}>
                                <Button color={2}>Rekisteröidy</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                            <Button
                                color={1}
                                onClick={async () => {
                                    const res = await API.login(data);
                                    console.log(res.data);

                                    if (res.data.auth && res.data.token) {
                                        setUser({
                                            ...user,
                                            auth: res.data.auth,
                                            JWTtoken: res.data.token,
                                            admin: res.data.admin,
                                            company: res.data.company,
                                        });
                                        res.data.admin ? history.push('/companymenu') : history.push('/game');
                                    }
                                }}
                            >
                                Kirjaudu
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container justify='center' alignItems='center' xs={12} lg={12}>
                        <Link to='/companyregister' style={{ width: '100%' }}>
                            <Button color={3}>Rekisteröidy yrityksenä</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default Login;
