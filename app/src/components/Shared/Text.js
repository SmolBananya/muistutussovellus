import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const Text = styled(Grid)`
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: ${(props) => (props.size ? `calc(${props.size}px + 0.2vw)` : 'calc(12px + 0.2vw)')};
    font-weight: ${(props) => (props.weight ? props.weight : '400')};
    text-align: ${(props) => props.align && props.align};
    color: ${(props) => (props.maincolor === true ? props.theme.colors.main : props.theme.colors.text)};
    margin: 1vmin;
    margin-bottom: ${(props) => props.mbot && '5vmin'};
`;

export default Text;
