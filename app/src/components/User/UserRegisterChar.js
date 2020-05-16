import React from 'react';
import Lottie from 'lottie-react-web';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import animation from '../../Animations/data.json';
import Main from '../reuse/Main';
import Button from '../reuse/Button';
import API from '../../Actions/API';
import { useHistory } from 'react-router-dom';

const ArrowLeft = styled(ArrowBackIcon)`
    && {
        fill: ${(props) => props.theme.colors.main};
        font-size: calc(2rem + 5vmin);
    }
`;
const ArrowRight = styled(ArrowForwardIcon)`
    && {
        fill: ${(props) => props.theme.colors.main};
        font-size: calc(2rem + 5vmin);
    }
`;

const UserRegisterChar = (props) => {
    let history = useHistory();
    return (
        <>
            <Main container direction='column' justify='space-around' alignItems='center'>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs={2}>
                        <ArrowLeft />
                    </Grid>
                    <Grid item xs={8}>
                        <Lottie
                            style={{
                                width: '100%',
                            }}
                            options={{
                                animationData: animation,
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <ArrowRight />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            color={1}
                            onClick={async () => {
                                const res = await API.userregister(props.data);
                                //console.log(res);
                                if (res.data.auth && res.data.token) {
                                    props.setUser({
                                        ...props.user,
                                        id: res.data.id,
                                        auth: res.data.auth,
                                        admin: res.data.admin,
                                        JWTtoken: res.data.token,
                                    });
                                    history.push('/game');
                                }
                            }}
                        >
                            Viimeistele rekisteröinti
                        </Button>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default UserRegisterChar;
