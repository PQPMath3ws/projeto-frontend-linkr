import axios from "axios";
import { useState } from "react";

import { LeftDiv, NewPostStyle, ProfilePicture, RightDiv, ShareStatusText, StyledButton, StyledButtonDiv, StyledInput } from "../styles/NewPost";

export function NewPost({ getAllFollowedUsersPosts, loggedUserInfos, token }) {
    const [url, setUrl] = useState("");
    const [status, setStatus] = useState("");
    const [load, setLoad] = useState(false);

    async function publishPost(e) {
        e.preventDefault();

        setLoad(true);

        try {
            await axios.post(` ${process.env.REACT_APP_API_URL}/post`, {
                url: url,
                description: status,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setLoad(false);
            setUrl("");
            setStatus("");
            await getAllFollowedUsersPosts();
        } catch (_) {
            alert("There was an error publishing your link");
            setLoad(false);
        }
    }

    return (
        <NewPostStyle>
            <LeftDiv>
                <ProfilePicture alt="imagem" src={loggedUserInfos.image}  />
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