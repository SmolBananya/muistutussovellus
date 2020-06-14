import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Misc/Theme';
import { UserProvider } from './Context/UserContext';
import Routing from './Components/Routing/Routing';
import { CookiesProvider } from 'react-cookie';

const App = () => {
    return (
        <>
            <UserProvider>
                <ThemeProvider theme={theme}>
                    <CookiesProvider>
                        <Routing />
                    </CookiesProvider>
                </ThemeProvider>
            </UserProvider>
        </>
    );
};

export default App;
