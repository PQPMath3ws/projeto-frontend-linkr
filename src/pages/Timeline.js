import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashtagBox } from "../components/Hashtags";

import { NavBar } from "../components/Navbar";
import { NewPost } from "../components/NewPost";
import { Post } from "../components/Post";

import Context from "../context/Context";

import { LinkrContent, LinkrContentContainer, TimelineText } from "../styles/Timeline";

export function Timeline() {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();
    const { token, setToken } = useContext(Context);
    
    const title = "Linkr | Timeline";

    async function getAllUsersPosts() {
        try {
            const request = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPosts(request.data);
        } catch (_) {
            setToken(null);
            localStorage.removeItem('token');
            navigate('/');
        }
    }

    async function likeDislikePost(id, likedByUser) {
        if (likedByUser === false) {
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/post/${id}/like`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                await getAllUsersPosts();
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
                await getAllUsersPosts();
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        document.title = title;
        getAllUsersPosts();
    }, []);

    return (
        <>
            <NavBar />
            <LinkrContent>
                <LinkrContentContainer>
                    <TimelineText>timeline</TimelineText>
                    <NewPost />
                    {posts && posts.length > 0 && posts.map(post => <Post key={post.id} id={post.id} post={post.post} user_image={post.user_image} username={post.username} likes={post.likesCount} likedByUser={false} post_url={post.post_url} likeDislikePost={likeDislikePost} />)}
                </LinkrContentContainer>
                <HashtagBox />
            </LinkrContent>
        </>
    );
};