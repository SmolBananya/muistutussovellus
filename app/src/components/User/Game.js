import React from 'react';
import Lottie from 'lottie-react-web';
import styled from 'styled-components';

import animation from '../../Animations/data.json';
import animation2 from '../../Animations/1.json';
import trophy from '../../Animations/trophy.json';

const Leaderboard = styled.div`
    background: url(${require('../../Images/SVG/leaderboard.svg')});
    width: 100px;
    height: 100px;
    position: absolute;
    left: 5vmin;
    top: 5vmin;
    z-index: 2;
`;

const Game = (props) => {
    const teksti = 'testi';
    animation.layers[0].t.d.k[0].s.t = teksti;
    console.log(animation.layers[0].t.d.k[0].s.t);

    return (
        <>
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
            <div onClick={() => (props.btn ? props.setBtn(false) : props.setBtn(true))}>
                <Lottie
                    style={{ height: window.innerHeight }}
                    options={{
                        animationData: animation,
                    }}
                />
            </div>
        </>
    );
};

export default Game;