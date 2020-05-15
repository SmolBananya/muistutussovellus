import React from 'react';
import Lottie from 'lottie-react-web';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Toolbar from '../Toolbar';
import animation from '../../Animations/data.json';
import Main from '../reuse/Main';
import Button from '../reuse/Button';

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

const UserRegisterChar = () => {
    return (
        <>
            <Toolbar value='Valitse pelihahmo' />
            <Main container direction='row' justify='center' alignItems='center'>
                <Grid item xs={11}>
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
                    </Grid>

                    <Grid item xs={12}>
                        <Button color={1}>Viimeistele rekisteröinti</Button>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default UserRegisterChar;
