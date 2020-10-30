import { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = () => {
    const [user, setUser] = useState({
        a: 1
    });

    return [user, setUser];

}