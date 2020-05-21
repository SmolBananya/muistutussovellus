import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        auth: true,
        admin: true,
        company: '1',
        JWTtoken: '1',
    });

    return <UserContext.Provider value={[user, setUser]}>{props.children}</UserContext.Provider>;
};
