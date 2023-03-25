import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";

import { ActionButton, LikesText, PostText, PostTextInput, ProfilePicture, RightActionsDiv, RightHeaderDiv, StyledIcon, StyledLefDiv, StyledLink, StyledLinkDescription, StyledLinkTitle, StyledLinkUrl, StyledLinkUrlImage, StyledPost, StyledRightDiv, UsernameText } from "../styles/Post";

export function Post({ id, post, user_image, username, likes, likedByUser, post_url, id_user, isPostOwner, setIsModalOpen, setPostId, token, getAllFollowedUsersPosts }) {
    const [linkPreviewInfos, setLinkPreviewInfos] = useState({
        title: "",
        images: [],
        description: "",
    });
    const [canEditPost, setCanEditPost] = useState(false);
    const [newPost, setNewPost] = useState(post);

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

    async function canUpdateThePost(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            try {
                await axios.patch(`${process.env.REACT_APP_API_URL}/post/${id}/update`, {
                    post: newPost
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCanEditPost(false);
                await getAllFollowedUsersPosts();
            } catch (error) {
                console.log(error);
                setCanEditPost(false);
            }
        }
    }

    function openModal() {
        setPostId(id);
        setIsModalOpen(true);
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
                <RightHeaderDiv>
                    <UsernameText to={`/user/${id_user}`}>{username}</UsernameText>
                    {isPostOwner && <RightActionsDiv>
                            <ActionButton onClick={() => setCanEditPost(true)}>
                                <BsPencilFill size={16} color="#FFFFFF" />
                            </ActionButton>
                            <ActionButton onClick={openModal}>
                                <BsTrashFill size={16} color="#FFFFFF" />
                            </ActionButton>
                        </RightActionsDiv>}
                </RightHeaderDiv>
                {canEditPost ? <PostTextInput value={newPost} onKeyDown={canUpdateThePost} onChange={(event) => setNewPost(event.target.value)} ref={(ref) => ref && ref.focus()} onFocus={(event) => event.currentTarget.setSelectionRange(event.currentTarget.value.length, event.currentTarget.value.length)} /> : <ReactTagify tagStyle={{ color: "#FFFFFF", fontWeight: 700, cursor: "pointer" }} tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1, tag.length)}`)}>
                    <PostText>{post}</PostText>
                    </ReactTagify>}
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