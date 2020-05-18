import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Text from '../Components/Shared/Text';

const ArrowBack = styled(ArrowBackIosIcon)`
    && {
        fill: ${(props) => props.theme.colors.main};
        vertical-align: text-bottom;
    }
`;
const IconButton = styled.div`
    padding: 1em;
    position: absolute;
    left: 0;
`;
const Toolbarbg = styled(Grid)`
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 2;
    color: #000000;
    background-color: ${(props) => props.theme.colors.bg};
`;

const Toolbar = (props) => {
    return (
        <Toolbarbg container direction='row' justify='center' alignItems='center'>
            {props.setShowCharacterSelection ? (
                <IconButton>
                    <Link onClick={() => props.setShowCharacterSelection(false)}>
                        <ArrowBack />
                    </Link>
                </IconButton>
            ) : (
                <IconButton>
                    <Link to={('/', props.backarrowaction)}>
                        <ArrowBack />
                    </Link>
                </IconButton>
            )}

            <Text style={{ textAlign: 'center' }} item xs={11} maincolor size={14} weight={500}>
                {props.value}
            </Text>
        </Toolbarbg>
    );
};

export default Toolbar;
