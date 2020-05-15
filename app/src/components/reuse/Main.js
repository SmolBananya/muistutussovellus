import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const Main = styled(Grid)`
    width: 100vw;
    height: ${window.innerHeight}px;
    position: absolute;
    background-color: ${(props) => props.theme.colors.bg};
    background-repeat: no-repeat;
    background-size: cover;
`;

export default Main;
