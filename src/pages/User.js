import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";

import { HashtagBox } from "../components/Hashtags";
import { NavBar } from "../components/Navbar";
import { Post } from "../components/Post";

import { LinkrContent, LinkrContentContainer, TimelineImage, TimelineImageText, TimelineInfoDiv } from "../styles/Timeline";

export function UserPage({ loggedUserInfos, token, setToken }) {
    const [posts, setPosts] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();

    const title = `Linkr | ${loggedUserInfos.username}'s Posts`;

    async function getUserPosts() {
        try {
            const request = await axios.get(`${process.env.REACT_APP_API_URL}/user/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPosts(request.data);
        } catch (error) {
            if (error.status === 401) {
                setToken(null);
                localStorage.removeItem('token');
                navigate('/');
            } else {
                navigate('/timeline');
            }
        }
    }

    /*
    async function likeDislikePost(id, likedByUser) {
        if (likedByUser === false) {
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/post/${id}/like`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                await getUserPosts();
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
                await getUserPosts();
            } catch (error) {
                console.log(error);
            }
        }
    }
    */

    useEffect(() => {
        document.title = title;
        getUserPosts();
    }, []);

    if (!id || Number.isNaN(Number(id))) return (<Navigate to="/"></Navigate>);

    return (
        <>
            <NavBar loggedUserInfos={loggedUserInfos} />
            <LinkrContent>
                <LinkrContentContainer>
                    <TimelineInfoDiv>
                        <TimelineImage src={loggedUserInfos.image} />
                        <TimelineImageText>{loggedUserInfos.username}'s posts</TimelineImageText>
                    </TimelineInfoDiv>
                    {posts && posts.length > 0 && posts.map(post => <Post key={post.id} id={post.id} post={post.post} user_image={post.user_image} username={post.username} likes={post.likes} likedByUser={false} post_url={post.post_url} id_user={post.id_user} />)}
                </LinkrContentContainer>
                <HashtagBox />
            </LinkrContent>
        </>
    );
}