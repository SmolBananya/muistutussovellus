import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Text from '../../Shared/Text';
import Lottie from 'lottie-react-web';
import FireworksAnimation from '../../../Animations/fireworks.json';

const DarkBG = styled(Grid)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.6);
`;
const CongratulationWindow = styled(Grid)`
    background-color: #ffffff;
    border: 2px solid #4daac9;
    border-radius: 12px;
    padding: 20px;
`;

const UserCongratulation = () => {
    return (
        <DarkBG container direction='column' justify='center' alignItems='center'>
            <Grid container direction='row' justify='center' alignItems='center'>
                <CongratulationWindow item xs={10}>
                    <Grid item xs={12}>
                        <Text size={30} maincolor weight={700} align='center'>
                            Onneksi olkoon!
                        </Text>
                        <Text size={20} maincolor weight={500} align='center'>
                            Tavoite saavutettu
                        </Text>
                    </Grid>
                    <Grid item xs={12}>
                        <Lottie
                            style={{}}
                            options={{
                                animationData: FireworksAnimation,
                            }}
                        />
                    </Grid>
                </CongratulationWindow>
            </Grid>
        </DarkBG>
    );
};

export default UserCongratulation;
