import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Misc/Theme';
import { UserProvider } from './Context/UserContext';
import Routing from './Components/Routing/Routing';

const App = () => {
    return (
        <>
            <UserProvider>
                <ThemeProvider theme={theme}>
                    <Routing />
                </ThemeProvider>
            </UserProvider>
        </>
    );
};

export default App;
