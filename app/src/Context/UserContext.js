import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        auth: true,
        admin: false,
        company: 'Autoni Digital Oy',
        JWTtoken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzE0LCJhZG1pbiI6ZmFsc2UsImNvbXBhbnkiOiJBdXRvbmkgRGlnaXRhbCBPeSIsInJlZ2lzdGVyY29kZSI6NjU4MTYsImlhdCI6MTU5MTUzMTc3Mn0.Gg7cq8fHwcmF7h-WaNKnFGQ5tJZrT3oAVK6CzYXeAK0',
        registercode: '65816',
    });

    return <UserContext.Provider value={[user, setUser]}>{props.children}</UserContext.Provider>;
};
