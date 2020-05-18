import React from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkboxi from '@material-ui/core/Checkbox';

const Cb = styled(Checkboxi)`
    &&& {
        color: ${(props) => props.theme.colors.main};
        &:checked {
            color: ${(props) => props.theme.colors.main};
        }
    }
`;
const Cblabel = styled(FormControlLabel)``;

const Checkbox = (props) => <Cb checked={props.checked} onChange={props.onChange} />;

export default Checkbox;
