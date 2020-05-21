import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect, useHistory } from 'react-router-dom';

import Toolbar from '../../Toolbar';
import API from '../../../Actions/API';
import Main from '../../Shared/Main';
import Textbox from '../../Shared/Textbox';
import Button from '../../Shared/Button';
import Text from '../../Shared/Text';
import { UserContext } from '../../../Context/UserContext';

const CompanyRegister = (props) => {
    let history = useHistory();
    const [user, setUser] = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        company: '',
        email: '',
        password: '',
    });
    const [registerCompleted, setRegisterCompleted] = useState({});
    return (
        <>
            {user.admin && user.auth && <Redirect to='/companymenu' />}
            {window.innerHeight > 300 && <Toolbar backarrowaction='login' value='Luo yritystunnus' />}
            <Main
                container
                direction='column'
                justify={window.innerHeight < 300 ? 'flex-start' : 'space-around'}
                alignItems='center'
            >
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid container item xs={12} sm={6} md={4} lg={3} spacing={1}>
                        <Grid item xs={12}>
                            <Textbox
                                type='text'
                                placeholder='Yrityksen nimi'
                                onChange={(e) => setData({ ...data, company: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Textbox
                                type='text'
                                placeholder='Sähköposti'
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

                        <Grid item xs={12}>
                            <Button
                                color={1}
                                onClick={async () => {
                                    const res = await API.companyregister(data);

                                    if (res.data.auth && res.data.token) {
                                        setRegisterCompleted({
                                            ...registerCompleted,
                                            company: res.data.company,
                                            code: res.data.code,
                                        });

                                        //  setTimeout(() => {
                                        setUser({
                                            ...user,
                                            auth: true,
                                            admin: true,
                                            JWTtoken: res.data.token,
                                            company: res.data.company,
                                        });
                                        history.push('/companymenu');
                                        // }, 5000);
                                    }
                                }}
                            >
                                Tallenna
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justify='center' alignItems='center'>
                        {registerCompleted.company && (
                            <>
                                <Grid item xs={10}>
                                    <Text align='center' size={16}>
                                        Yritykselle <b>{registerCompleted.company}</b> luotu tili onnistuneesti
                                    </Text>
                                </Grid>
                                <Grid item xs={10}>
                                    <Text align='center' size={16}>
                                        Rekisteröintikoodi
                                    </Text>
                                </Grid>
                                <Grid item xs={10}>
                                    <Text align='center' size={46} weight={700} maincolor>
                                        {registerCompleted.code}
                                    </Text>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default CompanyRegister;
