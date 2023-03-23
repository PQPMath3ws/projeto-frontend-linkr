import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";

import { LikesText, PostText, ProfilePicture, StyledIcon, StyledLefDiv, StyledLink, StyledLinkDescription, StyledLinkTitle, StyledLinkUrl, StyledLinkUrlImage, StyledPost, StyledRightDiv, UsernameText } from "../styles/Post";

export function Post({ id, post, user_image, username, likes, likedByUser, post_url, likeDislikePost }) {
    const [linkPreviewInfos, setLinkPreviewInfos] = useState({
        title: "",
        images: [],
        description: "",
    });

    const navigate = useNavigate();

    async function getLinkInfos() {
        try {
            const request = await axios.post(`${process.env.REACT_APP_API_URL}/url_fetch`, { url: post_url } );
            setLinkPreviewInfos(request.data);
        } catch (_) {
            setLinkPreviewInfos({
                title: post_url,
                images: [
                    "https://i.pinimg.com/originals/9d/1a/a7/9d1aa76c041ff6bf890a90aa92addd76.png",
                ],
                description: post_url,
            });
        }
    }

    useEffect(() => {
        getLinkInfos();
    }, []);

    return (
        <StyledPost>
            <StyledLefDiv>
                <ProfilePicture src={user_image} alt="imagem" />
                <StyledIcon likedByUser={likedByUser} onClick={() => console.log("OK")}>
                    {likedByUser ? <VscHeartFilled /> : <VscHeart />}
                </StyledIcon>
                <LikesText>{likes}</LikesText>
            </StyledLefDiv>
            <StyledRightDiv>
                <UsernameText to={`/user/${id}`}>{username}</UsernameText>
                <ReactTagify tagStyle={{ color: "#FFFFFF", fontWeight: 700, cursor: "pointer" }} tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1, tag.length)}`)}>
                    <PostText>{post}</PostText>
                </ReactTagify>
                {post_url && <StyledLink to={post_url} target="_blank" rel="noopener noreferrer">
                    <div>
                        <StyledLinkTitle>{linkPreviewInfos.title}</StyledLinkTitle>
                        <StyledLinkDescription>{linkPreviewInfos.description}</StyledLinkDescription>
                        <StyledLinkUrl>{post_url}</StyledLinkUrl>
                    </div>
                    <StyledLinkUrlImage src={linkPreviewInfos.images.length > 0 ? linkPreviewInfos.images[Math.floor(Math.random() * linkPreviewInfos.images.length)] : "https://i.pinimg.com/originals/9d/1a/a7/9d1aa76c041ff6bf890a90aa92addd76.png"} alt="imagem" />
                    </StyledLink>}
            </StyledRightDiv>
        </StyledPost>
    );
}