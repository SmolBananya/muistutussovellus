import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const Main = styled(Grid)`
    width: 100%;
    height: ${(props) => (props.long ? `calc(${window.innerHeight}px + 60px)` : `${window.innerHeight}px`)};
    top: ${(props) => (props.long ? '60px' : '0px')};
    position: relative;
    background-color: ${(props) => props.theme.colors.bg};
    padding: ${(props) => (props.long ? '0em 1em' : '1em')};
`;

export default Main;
