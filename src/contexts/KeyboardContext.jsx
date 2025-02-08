import React, { createContext, useState } from 'react';

export const KeyboardContext = createContext();

export const KeyboardProvider = ({ children }) => {
    const [state, setState] = useState({
        pin: "0000",
    });

    return (
        <KeyboardContext.Provider value={{ state, setState }}>
            {children}
        </KeyboardContext.Provider>
    );
};