import axios from "axios";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";

import { HashtagBox } from "../components/Hashtags";
import { NavBar } from "../components/Navbar";
import { NewPost } from "../components/NewPost";
import { Post } from "../components/Post";

import { LinkrContent, LinkrContentContainer, ModalActionButton, ModalActionsDiv, ModalStyle, ModalTitleText, TimelineText } from "../styles/Timeline";

export function Timeline({ allFollowedUsersPosts, getAllFollowedUsersPosts, isModalOpen, loggedUserInfos, setIsModalOpen, token }) {
    const [postId, setPostId] = useState(0);
    const title = "Linkr | Timeline";

    /*

    async function likeDislikePost(id, likedByUser) {
        if (likedByUser === false) {
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/post/${id}/like`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                //await getAllUsersPosts(); - callback here
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/post/${id}/dislike`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                //await getAllUsersPosts(); - callback here
            } catch (error) {
                console.log(error);
            }
        }
    }
    */

    async function deletePost() {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/post/${postId}/delete`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setIsModalOpen(false);
            await getAllFollowedUsersPosts();
        } catch (error) {
            console.log(error);
            setIsModalOpen(false);
            await getAllFollowedUsersPosts();
        }
    }

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <>
            <NavBar loggedUserInfos={loggedUserInfos} />
            <LinkrContent>
                <LinkrContentContainer>
                    <TimelineText>timeline</TimelineText>
                    <NewPost loggedUserInfos={loggedUserInfos} token={token} getAllFollowedUsersPosts={getAllFollowedUsersPosts} />
                    {allFollowedUsersPosts && allFollowedUsersPosts.length > 0 && allFollowedUsersPosts.map(post => <Post key={post.id} id={post.id} post={post.post} user_image={post.user_image} username={post.username} likes={post.likes} likedByUser={false} post_url={post.post_url} id_user={post.id_user} isPostOwner={(post.id_user === loggedUserInfos.id)} setIsModalOpen={setIsModalOpen} setPostId={setPostId} token={token} getAllFollowedUsersPosts={getAllFollowedUsersPosts} />)}
                </LinkrContentContainer>
                <HashtagBox />
                <ReactModal isOpen={isModalOpen} style={ModalStyle} ariaHideApp={false}>
                    <ModalTitleText>
                        Are you sure you want to delete this post?
                    </ModalTitleText>
                    <ModalActionsDiv>
                        <ModalActionButton onClick={() => setIsModalOpen(false)}>
                            No, go back
                        </ModalActionButton>
                        <ModalActionButton inverted={true} onClick={deletePost}>
                            Yes, delete it
                        </ModalActionButton>
                    </ModalActionsDiv>
                </ReactModal>
            </LinkrContent>
        </>
    );
};