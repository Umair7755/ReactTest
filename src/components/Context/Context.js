import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const Context = ({ children }) => {
    const [event, setEvent] = useState('');
    const [host, setHost] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [location, setLocation] = useState('');
    const [pic, setPic] = useState(null);

    return (
        <GlobalContext.Provider
            value={{
                event, setEvent,
                host, setHost,
                start, setStart,
                end, setEnd,
                location, setLocation,
                pic, setPic
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default Context;