import { useContext } from "react";
import { Navigate } from "react-router-dom";

import Context from "../context/Context";

export function Logout() {
    const { setToken } = useContext(Context);

    setToken(null);
    localStorage.removeItem("token");

    return (
        <Navigate to="/" />
    )
}