import React from 'react';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

const Bg = styled(Grid)`
    width: 100vw;
    height: ${window.innerHeight}px;
    position: absolute;
    background: url(${require('./../../img/bglogin.png')});
    background-repeat: no-repeat;
    background-size: cover;
`;

const TextBox = styled.input`
    width: 100%;
    padding: 20px 0px;
    margin-bottom: 10px;
    border: 0;
    outline: 0;
    background-color: rgba(48, 48, 48, 0.3);
    box-shadow: 0px 0px 1px 1px rgba(48, 48, 48, 0.75);
    text-indent: 20px;
    transition: box-shadow 0.2s linear;

    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 300;

    color: #ffffff;

    &:hover {
        box-shadow: 0px 0px 1px 1px rgba(48, 48, 48, 1);
    }

    &:focus {
        box-shadow: 0px 0px 1px 1px rgba(48, 48, 48, 1);
    }

    &::-webkit-input-placeholder {
        color: #ffffff;
    }
`;

const LoginBtn = styled.button`
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    border: 0;
    outline: 0;
    background-color: rgba(48, 48, 48, 0.8);
    color: #ffffff;
    transition: background-color 0.2s linear;

    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1rem;

    &:hover {
        background-color: rgba(48, 48, 48, 1);
        cursor: pointer;
    }
`;

const RegisterBtn = styled.button`
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    border: 0;
    outline: 0;
    background-color: rgba(231, 64, 90, 0.8);
    color: #ffffff;
    transition: background-color 0.2s linear;

    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1rem;

    &:hover {
        background-color: rgba(231, 64, 90, 1);
        cursor: pointer;
    }
`;

const Login = () => {
    return (
        <>
            <Bg container direction='row' justify='center' alignItems='center'>
                <Grid item xs={10}>
                    <Grid item xs={12}>
                        <TextBox type='text' placeholder='Käyttäjätunnus' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextBox type='password' placeholder='Salasana' />
                    </Grid>
                    <Grid item xs={12}>
                        <LoginBtn>Kirjaudu sisään</LoginBtn>
                    </Grid>
                    <Grid item xs={12}>
                        <RegisterBtn>Rekisteröidy</RegisterBtn>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid item xs={12}>
                        <RegisterBtn>Rekisteröi yritys</RegisterBtn>
                    </Grid>
                </Grid>
            </Bg>
        </>
    );
};

export default Login;
