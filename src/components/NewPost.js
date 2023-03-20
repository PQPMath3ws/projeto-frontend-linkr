import axios from "axios";
import { useEffect, useState } from "react";

import { LeftDiv, NewPostStyle, ProfilePicture, RightDiv, ShareStatusText, StyledButton, StyledButtonDiv, StyledInput } from "../styles/NewPost";

export function NewPost() {
    const [avatar, setAvatar] = useState('https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true');
    const [url, setUrl] = useState("");
    const [status, setStatus] = useState("");
    const [load, setLoad] = useState(false);

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

    async function publishPost(e) {
        e.preventDefault();

        setLoad(true);

        const token = localStorage.getItem('token');

        const bodyRequest = {
            url: url,
            description: status,
        };

        const requestConfig = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            await axios.post(` ${process.env.REACT_APP_API_URL}/post`, bodyRequest, requestConfig);
            setLoad(false);
            setUrl("");
            setStatus("");
        } catch (_) {
            alert("There was an error publishing your link");
            setLoad(false);
        }
    }

    useEffect(() => {
        getUserInfos();
    }, []);

    return (
        <NewPostStyle>
            <LeftDiv>
                <ProfilePicture alt="imagem" src={avatar}  />
            </LeftDiv>
            <RightDiv>
                <ShareStatusText>What are you going to share today?</ShareStatusText>
                <form onSubmit={publishPost}>
                    <StyledInput disabled={load} onChange={(e) => setUrl(e.target.value)} padding={[8, 8, 8, 8]} placeholder="https://" value={url} required />
                    <StyledInput disabled={load} onChange={(e) => setStatus(e.target.value)} padding={[8, 8, 52, 8]} placeholder="Awesome article about #javascript" value={status} required />
                    <StyledButtonDiv>
                        <StyledButton>Publish</StyledButton>
                    </StyledButtonDiv>
                </form>
            </RightDiv>
        </NewPostStyle>
    );
}