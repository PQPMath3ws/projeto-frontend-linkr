import axios from "axios";
import { useState } from "react";
import { FiSearch } from "react-icons/fi"
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

import { Avatar, Bar, DropdownLogout, IsFollowingText, Logo, Logout, RightDivContent, SearchContentDiv, SearchDiv, SearchInput, SearchResultDiv, SearchResultImage, SearchResultsDiv, SearchResultText } from "../styles/Navbar";

export function NavBar({ loggedUserInfos }) {
    const [open, setOpen] = useState(false);
    const [canShowResultBar, setCanShowResultBar] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

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
                            {result.isFollowing ? <IsFollowingText>{'\u2B24'} following</IsFollowingText> : null}
                        </SearchResultDiv>)}
                    </SearchResultsDiv>
                </SearchContentDiv>
                <RightDivContent onClick={() => setOpen(!open)}>
                    {open ? 
                        <VscChevronUp color="#FFFFFF" size={30} /> :
                        <VscChevronDown color="#FFFFFF" size={30} />
                    }
                    <Avatar data-test="avatar" src={loggedUserInfos.image} alt="avatar" />
                    {open && <DropdownLogout>
                            <Logout to="/logout">Logout</Logout>
                        </DropdownLogout>}
                </RightDivContent>
            </Bar>
        </>
    );
};