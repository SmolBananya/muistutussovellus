import React, { useContext } from 'react';
import Lottie from 'lottie-react-web';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import animation from '../../../Animations/juoksu.json';
import Main from '../../Shared/Main';
import Button from '../../Shared/Button';
import API from '../../../Actions/API';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';

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
    const [user, setUser] = useContext(UserContext);
    return (
        <>
            <Main container direction='column' justify='space-between' alignItems='center'>
                <Grid container direction='row' justify='center' alignItems='center'></Grid>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid container item xs={12} sm={8} md={6} spacing={1} justify='center' alignItems='center'>
                        <Grid container item xs={2}>
                            <Grid item xs={12} style={{ textAlign: 'left' }}>
                                <ArrowLeft />
                            </Grid>
                        </Grid>
                        <Grid container item xs={8}>
                            <Grid item xs={12} style={{ overflow: 'hidden' }}>
                                <div
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <Lottie
                                        options={{
                                            animationData: animation,
                                        }}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container item xs={2}>
                            <Grid item xs={12} style={{ textAlign: 'right' }}>
                                <ArrowRight />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid container item xs={12} sm={8} md={6} lg={3} spacing={1} justify='center' alignItems='center'>
                        <Grid item xs={12}>
                            <Button
                                color={1}
                                onClick={async () => {
                                    const res = await API.userregister(props.data);
                                    //console.log(res);
                                    if (res.data.auth && res.data.token) {
                                        setUser({
                                            ...user,
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
                </Grid>
            </Main>
        </>
    );
};

export default UserRegisterChar;
