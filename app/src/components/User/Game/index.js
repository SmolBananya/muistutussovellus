import React from 'react';
import Lottie from 'lottie-react-web';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Main from '../../Shared/Main';

import animation from '../../../Animations/juoksu.json';
import animation2 from '../../../Animations/1.json';
import trophy from '../../../Animations/trophy.json';

const Leaderboard = styled.div`
    background: url(${require('../../../Images/SVG/leaderboard.svg')});
    width: 100px;
    height: 100px;
    position: absolute;
    left: 5vmin;
    top: 5vmin;
    z-index: 2;
`;

const Game = (props) => {
    // const teksti = 'testi';
    //animation.layers[0].t.d.k[0].s.t = teksti;
    //console.log(animation.layers[0].t.d.k[0].s.t);

    return (
        <>
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
            <Main
                bgcolor='#000e52'
                container
                direction='column'
                justify={window.innerHeight < 300 ? 'flex-start' : 'space-around'}
                alignItems='center'
            >
                <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                    xs={12}
                    sm={10}
                    md={8}
                    lg={6}
                    xl={4}
                >
                    <Grid item xs={12}>
                        <div>
                            <Lottie
                                style={{ height: window.innerHeight }}
                                options={{
                                    animationData: animation,
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default Game;
