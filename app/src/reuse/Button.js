import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    border: 0;
    outline: 0;
    background-color: ${(props) => props.color === 1 && props.theme.colors.button1.color1};
    background-color: ${(props) => props.color === 2 && props.theme.colors.button2.color1};
    background-color: ${(props) => props.color === 3 && props.theme.colors.button3.color1};
    background-color: ${(props) => props.color === 4 && props.theme.colors.button4.color1};
    border: ${(props) => props.color === 4 && `3px solid ${props.theme.colors.button4.color2}`};
    color: #ffffff;
    color: ${(props) => props.color === 4 && props.theme.colors.button4.color2};
    transition: background-color 0.2s linear;

    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: calc(12px + 1vmin);
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
        background-color: ${(props) => props.color === 1 && props.theme.colors.button1.color2};
        background-color: ${(props) => props.color === 2 && props.theme.colors.button2.color2};
        background-color: ${(props) => props.color === 3 && props.theme.colors.button3.color2};
        background-color: ${(props) => props.color === 4 && props.theme.colors.button4.color2};
        cursor: pointer;
    }
`;

export default Button;
