import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Misc/Theme';
import Routing from './Components/Routing/Routing';

const App = () => {
    const [user, setUser] = useState({
        auth: false,
        admin: false,
        company: '',
        JWTtoken: '',
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Routing user={user} setUser={setUser} />
            </ThemeProvider>
        </>
    );
};

export default App;
