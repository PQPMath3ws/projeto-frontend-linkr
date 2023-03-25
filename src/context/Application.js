import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Context from "./Context";

export function Application({ children }) {
    const [loggedUserInfos, setLoggedUserInfos] = useState({
        id: 0,
        username: "",
        image: "https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true",
    });
    const [allFollowedUsersPosts, setAllFollowedUsersPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { token, setToken } = useContext(Context);

    const navigate = useNavigate();

    async function getLoggedUserInfos() {
        try {
            const request = await axios.get(`${process.env.REACT_APP_API_URL}/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setLoggedUserInfos(request.data);
        } catch (error) {
            //setToken(null);
            //localStorage.removeItem('token');
            //navigate('/');
        }
    }

    async function getAllFollowedUsersPosts() {
        try {
            const request = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setAllFollowedUsersPosts(request.data);
        } catch (_) {
            setToken(null);
            localStorage.removeItem('token');
            navigate('/');
        }
    }

    useEffect(() => {
        getLoggedUserInfos().then(() => {
            getAllFollowedUsersPosts();
        });
    }, []);

    return (
        <>
            {React.cloneElement(children, {
                allFollowedUsersPosts,
                getAllFollowedUsersPosts,
                isModalOpen,
                loggedUserInfos,
                setIsModalOpen,
                setToken,
                token,
            })}
        </>
    );
}