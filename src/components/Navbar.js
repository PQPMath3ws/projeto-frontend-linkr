import axios from "axios";
import { useEffect, useState } from "react";
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

import { Avatar, Bar, DropdownLogout, Logo, Logout, RightDivContent } from "../styles/Navbar";

export function NavBar() {
    const [open, setOpen] = useState(false);
    const [avatar, setAvatar] = useState('https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true');

    async function getUserInfos() {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const request = await axios.get(`${process.env.REACT_APP_API_URL}/me`, config);
            setAvatar(request.data.image);
        } catch (error) {
            console.log(error.response);
            alert(error.response.data);
        }
    }

    useEffect(() => {
        getUserInfos();
    }, []);

    return (
        <Bar>
            <Logo to="/timeline">linkr</Logo>
            <RightDivContent onClick={() => setOpen(!open)}>
                {open ? 
                    <VscChevronUp color="#ffffff" size={30} /> :
                    <VscChevronDown color="#ffffff" size={30} />
                }
                <Avatar data-test="avatar" src={avatar} alt="avatar" />
                {open && <DropdownLogout>
                        <Logout to="/logout">Logout</Logout>
                    </DropdownLogout>}
            </RightDivContent>
        </Bar>
    );
};