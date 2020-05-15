import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


import API from '../Actions/API';
import Textbox from '../Components/reuse/Textbox';
import Logo from '../Components/reuse/Logo';
import Button from '../Components/reuse/Button';
import Main from '../Components/reuse/Main';

const Login = (props) => {
    let history = useHistory();
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    return (
        <>
            <Main bgcolor='#000e52' container direction='row' justify='center' alignItems='center'>
                <Grid item xs={11}>
                    <Grid container direction='row' justify='center' alignItems='center'>
                        <Grid item xs={10}>
                            <Logo src={require('../Images/PointFightLogo.png')} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Textbox
                            autoFocus
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
                    <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
                        <Grid item xs={6}>
                            <Link to='/userregister'>
                                <Button color={2}>Rekisteröidy</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                color={1}
                                onClick={async () => {
                                    const res = await API.login(data);
                                    console.log(res.data);

                                    if (res.data.auth && res.data.token) {
                                        props.setUser({
                                            ...props.user,
                                            auth: res.data.auth,
                                            JWTtoken: res.data.token,
                                            admin: res.data.admin,
                                            company: res.data.company,
                                        });
                                        res.data.admin ? history.push('/companymain') : history.push('/game');
                                    }
                                }}
                            >
                                Kirjaudu
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to='/companyregister'>
                            <Button color={3}>Rekisteröidy yrityksenä</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default Login;
