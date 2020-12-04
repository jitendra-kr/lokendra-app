import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = () => {
    const [user, setUser] = useState();

    return [user, setUser];

}