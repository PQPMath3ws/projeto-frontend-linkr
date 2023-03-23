import { useState } from "react";

import Context from "./Context";

const Provider = ({ children }) => {
    const [token, setToken] = useState('');

    return (
        <Context.Provider value={{
            token,
            setToken
        }}>
            { children } 
            </Context.Provider>
    )
}

export default Provider