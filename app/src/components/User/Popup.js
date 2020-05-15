import React from 'react';
import styled from 'styled-components';

const FullScreen = styled.div`
    width: 100vw;
    height: ${window.innerHeight}px;
    position: absolute;
    z-index: 100;
    background-color: #ffffff;
`;

const Popup = () => {
    return <FullScreen />;
};

export default Popup;
