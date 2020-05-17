import React from 'react';
import Lottie from 'lottie-react-web';
import loadinganimation from '../Animations/circle_loading.json';
import styled from 'styled-components';

const Loadingbg = styled.div`
    width: 100%;
    background-color: rgba(250, 250, 250, 0.3);
    top: 0;
    left: 0;
    z-index: 3;
`;

const Loading = () => {
    return (
        <Loadingbg>
            <div
                style={{
                    width: '100%',
                    height: `${window.innerWidth / 3}px`,
                }}
            >
                <Lottie
                    options={{
                        animationData: loadinganimation,
                    }}
                />
            </div>
        </Loadingbg>
    );
};

export default Loading;
