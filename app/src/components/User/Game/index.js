import React, { useState, useEffect, useContext } from 'react';
import Lottie from 'lottie-react-web';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Main from '../../Shared/Main';
import animation from '../../../Animations/juoksu.json';
import POPUPselectuserdailytasks from '../Popup/UserDailyTasks';
import POPUPUserCongratulation from '../Popup/UserCongratulation';
import { UserContext } from '../../../Context/UserContext';

import io from 'socket.io-client';

const socket = io('http://192.168.31.20:3000');

const Leaderboard = styled.div`
    background: url(${require('../../../Images/SVG/leaderboard.svg')});
    width: 100px;
    height: 100px;
    position: absolute;
    left: 5vmin;
    top: 5vmin;
    z-index: 2;
`;
const GameAnimation = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;
const Task = styled.div`
    color: #ffffff;
    padding: 3vh;
    z-index: 2;
    font-size: calc(0.8rem + 1vw);
    background-color: rgba(77, 170, 201, 0.7);
    border: 2px solid #4daac9;
    border-radius: 12px;
    min-height: 80px;
    user-select: none;
`;

const Game = (props) => {
    const [user, setUser] = useContext(UserContext);

    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        socket.on('connect', () => {
            console.log('test'); // true
            socket.emit('nappi', user.JWTtoken);
        });
        socket.on('showpopup', (data) => {
            // setShowPopup(true);
            //setTimeout(() => setShowPopup(false), 2000);
        });
    }, []);
    // const teksti = 'testi';
    //animation.layers[0].t.d.k[0].s.t = teksti;
    //console.log(animation.layers[0].t.d.k[0].s.t);

    return (
        <>
            {/*showPopup && <POPUPUserCongratulation />}
            <POPUPselectuserdailytasks />
            {/*
            <Leaderboard />
            <div onClick={() => (props.btn ? props.setBtn(false) : props.setBtn(true))}>
              <Lottie
                    style={{
                        width: '100px',
                        height: '100px',
                        right: '5vmin',
                        top: '5vmin',
                        position: 'absolute',
                    }}
                    options={{
                        animationData: trophy,
                    }}
                />

            </div>

            <div onClick={() => props.btn && props.setBtn(false)}>
                <Lottie
                    style={{ height: window.innerHeight, position: 'absolute', width: '40%' }}
                    options={{
                        animationData: props.btn ? animation : animation2,
                    }}
                />
            </div>
            <div onClick={() => (props.btn ? props.setBtn(false) : props.setBtn(true))}>
                <Lottie
                    style={{
                        height: window.innerHeight,
                        position: 'absolute',
                        width: '40%',
                        left: '60%',
                    }}
                    options={{
                        animationData: props.btn ? animation : animation2,
                    }}
                />
            </div>
            */}
            <GameAnimation>
                <Lottie
                    style={{ height: window.innerHeight, marginTop: '160px' }}
                    options={{
                        animationData: animation,
                    }}
                    isClickToPauseDisabled={true}
                    isPaused={showPopup}
                    isStopped={showPopup}
                />
            </GameAnimation>

            <Main bgcolor='#000e52' container direction='row' justify='center' alignItems='flex-start'>
                <Grid
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    spacing={1}
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                >
                    <Grid container item xs={12} sm={6} md={4} lg={3} justify='space-between' spacing={2}>
                        <Grid style={{ zIndex: 2 }} item xs='auto'>
                            <img style={{ width: '40px' }} src={require('../../../Images/leaderboard.png')} />
                        </Grid>
                        <Grid
                            style={{ zIndex: 2 }}
                            item
                            xs='auto'
                            onClick={() => {
                                setUser({ ...user, auth: false, admin: false, JWTtoken: '' });
                            }}
                        >
                            <img style={{ width: '40px' }} src={require('../../../Images/exit.png')} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} md={4} lg={3} spacing={2}>
                        <Grid
                            style={{ zIndex: 2 }}
                            item
                            xs={6}
                            onClick={() => socket.emit('nappi', 'nappia 1 painettu')}
                        >
                            <Task>Olen tänään soittanut asiakkaalle 10 kertaa</Task>
                        </Grid>

                        <Grid
                            style={{ zIndex: 2 }}
                            item
                            xs={6}
                            onClick={() => socket.emit('nappi', 'nappia 2 painettu')}
                        >
                            <Task> Olen jättänyt 5 tarjousta asiakkaalle</Task>
                        </Grid>

                        <Grid
                            style={{ zIndex: 2 }}
                            item
                            xs={6}
                            onClick={() => socket.emit('nappi', 'nappia 3 painettu')}
                        >
                            <Task>Olen tänään tehnyt 7 kauppaa</Task>
                        </Grid>

                        <Grid
                            style={{ zIndex: 2 }}
                            item
                            xs={6}
                            onClick={() => socket.emit('nappi', 'nappia 4 painettu')}
                        >
                            <Task>Olen tänään auttanut työkaveria 4 kertaa</Task>
                        </Grid>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default Game;
