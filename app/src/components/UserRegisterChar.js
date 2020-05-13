import React from 'react';

// NPM libraries
import Lottie from 'lottie-react-web';
import styled from 'styled-components';

// Material-UI components
import Grid from '@material-ui/core/Grid';

// Components
import Toolbar from './Toolbar';
import animation from '../animData/data.json';

// Reuse
import Main from '../reuse/Main';
import Textbox from '../reuse/Textbox';
import Button from '../reuse/Button';
import Text from '../reuse/Text';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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

const Login = () => {
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

export default Login;
