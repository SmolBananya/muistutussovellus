import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import API from '../Actions/API';
import Textbox from '../Components/Shared/Textbox';
import Logo from '../Components/Shared/Logo';
import Button from '../Components/Shared/Button';
import Main from '../Components/Shared/Main';
import { UserContext } from '../Context/UserContext';
import { useCookies } from 'react-cookie';

const Login = (props) => {
    let history = useHistory();
    const [cookies, setCookie] = useCookies(['token']);
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
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container direction='row' justify='center' alignItems='center'>
                        <Grid container item xs={12} sm={6} md={4} lg={3} spacing={1}>
                            <Grid item xs={12}>
                                <Logo src={require('../Images/PointFightLogo.png')} />
                            </Grid>

                            <Grid item xs={12}>
                                <Textbox
                                    type='text'
                                    placeholder='Käyttäjätunnus'
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Textbox
                                    type='password'
                                    placeholder='Salasana'
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                />
                            </Grid>

                            <Grid container item xs={6}>
                                <Grid item xs={12}>
                                    <Button
                                        type='submit'
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

                                                setCookie('token', res.data.token, { path: '/' });
                                                res.data.admin ? history.push('/companymenu') : history.push('/game');
                                            }
                                        }}
                                    >
                                        Kirjaudu
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container item xs={6}>
                                <Grid item xs={12}>
                                    <Link to='/userregister'>
                                        <Button color={2}>Rekisteröidy</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Link to='/companyregister'>
                                    <Button color={3}>Rekisteröidy yrityksenä</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Main>
        </>
    );
};

export default Login;
