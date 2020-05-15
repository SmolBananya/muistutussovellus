import React, { useState } from 'react';

// Components
import Toolbar from './Toolbar';
import { companyregister } from './API';
import Loading from './Loading';

// Material-UI components
import Grid from '@material-ui/core/Grid';

// Reuse
import Main from '../reuse/Main';
import Textbox from '../reuse/Textbox';
import Button from '../reuse/Button';
import Text from '../reuse/Text';
import { Redirect } from 'react-router-dom';

const CompanyRegister = (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        company: '',
        email: '',
        password: '',
    });
    const [registerCompleted, setRegisterCompleted] = useState({});
    return (
        <>
            {props.user.admin && props.user.auth && <Redirect to='/companymain' />}

            <Toolbar backarrowaction='login' value='Luo yritystunnus' />
            <Main container direction='row' justify='center' alignItems='center'>
                <Grid item xs={11}>
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
                    <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
                        <Grid item xs={12}>
                            <Button
                                color={1}
                                onClick={async () => {
                                    const res = await companyregister(data);

                                    if (res.data.auth && res.data.token) {
                                        setRegisterCompleted({
                                            ...registerCompleted,
                                            company: res.data.company,
                                            code: res.data.code,
                                        });

                                        setTimeout(() => {
                                            props.setUser({
                                                ...props.user,
                                                auth: true,
                                                admin: true,
                                                JWTtoken: res.data.token,
<<<<<<< HEAD
                                                company: res.data.company,
=======

                                                company: res.data.company,

>>>>>>> master
                                            });
                                        }, 5000);
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
