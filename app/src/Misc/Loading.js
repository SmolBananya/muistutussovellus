import React from 'react';
import Lottie from 'lottie-react-web';
import loadinganimation from '../Animations/loading.json';

const Loading = () => {
    return (
        <div
            style={{
                width: '100%',
                height: `${window.innerWidth / 5}px`,
            }}
        >
            <Lottie
                options={{
                    animationData: loadinganimation,
                }}
            />
        </div>
    );
};

export default Loading;
