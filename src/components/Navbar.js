import axios from "axios";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi"
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

import { Avatar, Bar, DropdownLogout, Logo, Logout, RightDivContent, SearchContentDiv, SearchDiv, SearchInput, SearchResultDiv, SearchResultImage, SearchResultsDiv, SearchResultText } from "../styles/Navbar";

export function NavBar() {
    const [open, setOpen] = useState(false);
    const [canShowResultBar, setCanShowResultBar] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
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

    async function searchUserByUsername(event) {
        if (event.target.value) {
            const token = localStorage.getItem('token');
            try {
                const result = await axios.post(`${process.env.REACT_APP_API_URL}/search`, { username: event.target.value }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setSearchResult(result.data);
            } catch (error) {
                console.log(error.response);
                alert(error.response.data);
            }
        } else {
            setSearchResult([]);
        }
    }

    function hideSearchBar(event) {
        if (event.relatedTarget instanceof HTMLAnchorElement === false) setCanShowResultBar(false);
    }

    useEffect(() => {
        getUserInfos();
    }, []);

    return (
        <>
            <Bar>
                <Logo to="/timeline">linkr</Logo>
                <SearchContentDiv>
                    <SearchDiv>
                        <SearchInput placeholder="Search for people" onBlur={hideSearchBar} onChange={searchUserByUsername} onFocus={() => setCanShowResultBar(true)} />
                        <FiSearch color="#C6C6C6" size={20}/>
                    </SearchDiv>
                    <SearchResultsDiv canShowResultBar={canShowResultBar}>
                        {searchResult.length === 0 ? <SearchResultText>No user found.</SearchResultText> : searchResult.map((result, index) => <SearchResultDiv key={index} to={`/user/${result.id}`}>
                            <SearchResultImage src={result.image} />
                            <SearchResultText>{result.username}</SearchResultText>
                        </SearchResultDiv>)}
                    </SearchResultsDiv>
                </SearchContentDiv>
                <RightDivContent onClick={() => setOpen(!open)}>
                    {open ? 
                        <VscChevronUp color="#FFFFFF" size={30} /> :
                        <VscChevronDown color="#FFFFFF" size={30} />
                    }
                    <Avatar data-test="avatar" src={avatar} alt="avatar" />
                    {open && <DropdownLogout>
                            <Logout to="/logout">Logout</Logout>
                        </DropdownLogout>}
                </RightDivContent>
            </Bar>
        </>
    );
};