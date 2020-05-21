import styled from 'styled-components';

const Textbox = styled.input`
    width: 100%;
    padding: 15px 0px;
    border: 0;
    outline: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 1px 1px #ccc;
    text-indent: 20px;
    transition: box-shadow 0.2s linear;
    border-radius: 3px;

    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: calc(12px + 0.2vw);
    font-weight: 400;

    color: #000000;

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
