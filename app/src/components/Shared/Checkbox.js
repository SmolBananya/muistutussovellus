import React from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Cb = styled(Checkbox)`
    &&& {
        color: ${(props) => props.theme.colors.main};
        &:checked {
            color: ${(props) => props.theme.colors.main};
        }
    }
`;
const Cblabel = styled(FormControlLabel)``;

const Checkboxi = () => <Cb />;

export default Checkboxi;
