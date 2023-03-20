import axios from "axios";
import { useContext, useEffect, useState } from "react";

import Context from "../context/Context";

import { Box, BoxContainer, Diviser, StyledLink, Title } from "../styles/Hashtags";

export function HashtagBox() {
    const [data, setData] = useState([]);
    
    const { token } = useContext(Context);

    async function getTrendingHashtags() {
        try {
            const request = await axios.get(`${process.env.REACT_APP_API_URL}/hashtag`, {
                headers: {
                    Authorization: `Bearer ${token || localStorage.getItem('token')}`,
                }
            });
            setData(request.data);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        getTrendingHashtags();
    }, []);

    return (
        <Box data-test="trending">
            <BoxContainer>
                <Title>trending</Title>
                <Diviser />
                {data.length > 0 && data.map((value, index) => <StyledLink key={index} to={`/hashtag/${value}`}># {value}</StyledLink>)}
            </BoxContainer>
        </Box>
    );
}