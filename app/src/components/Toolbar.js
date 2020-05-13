import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Text from '../reuse/Text';

// Material-UI components
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const ArrowBack = styled(ArrowBackIosIcon)`
    && {
        fill: ${(props) => props.theme.colors.main};
    }
`;
const Toolbarbg = styled(Grid)`
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 1;
    text-indent: 20px;
    color: #000000;
    background-color: ${(props) => props.theme.colors.bg};
`;

const ToolbarText = styled(Grid)`
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: calc(12px + 2vmin);
    font-weight: 500;
    color: ${(props) => props.theme.colors.main};
`;

const Toolbar = (props) => {
    return (
        <Toolbarbg container direction='row' justify='flex-start' alignItems='center'>
            <Link to={('/', props.backarrowaction)}>
                <ArrowBack />
            </Link>
            <Text style={{ textAlign: 'center' }} item xs='auto' maincolor size={14} weight={500}>
                {props.value}
            </Text>
        </Toolbarbg>
    );
};

export default Toolbar;