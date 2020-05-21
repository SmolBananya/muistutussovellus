import styled from 'styled-components';

const Textbox = styled.input`
    width: 100%;
    padding: 8px 0px;
    margin-bottom: 10px;
    border: 0;
    outline: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 1px 1px #ccc;
    transition: box-shadow 0.2s linear;
    border-radius: 3px;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: ${(props) => (props.size ? `calc(${props.size}px + 0.2vw)` : 'calc(12px + 0.2vw)')};
    font-weight: ${(props) => (props.weight ? props.weight : '400')};
    color: ${(props) => (props.maincolor ? props.theme.colors.main : props.theme.colors.text)};
    text-align: center;

    &:hover {
        box-shadow: 0px 0px 1px 2px ${(props) => props.theme.colors.main};
    }

    &:focus {
        box-shadow: 0px 0px 1px 2px ${(props) => props.theme.colors.main};
    }

    &::placeholder {
        color: #000000;
    }
`;

export default Textbox;
