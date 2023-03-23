import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { HashtagBox } from "../components/Hashtags";

import { NavBar } from "../components/Navbar";
import { Post } from "../components/Post";

import Context from "../context/Context";

import { LinkrContent, LinkrContentContainer, TimelineImage, TimelineImageText, TimelineInfoDiv } from "../styles/Timeline";

export function UserPage() {
    const [userInfos, setUserInfos] = useState({});
    const [posts, setPosts] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();

    const { token, setToken } = useContext(Context);

    const title = "Linkr";

    async function getUserInfosById() {
        try {
            const request = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserInfos(request.data);
            return request.data;
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

    useEffect(() => {
        document.title = title;
        getUserInfosById().then((user) => {
            document.title += ` | ${user.username}'s Posts`;
            getUserPosts();
        });
    }, []);

    if (!id || Number.isNaN(Number(id))) return (<Navigate to="/"></Navigate>);

    return (
        <>
            <NavBar />
            <LinkrContent>
                <LinkrContentContainer>
                    <TimelineInfoDiv>
                        <TimelineImage src={userInfos.image || "https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true"} />
                        <TimelineImageText>{userInfos.username}'s posts</TimelineImageText>
                    </TimelineInfoDiv>
                    {posts && posts.length > 0 && posts.map(post => <Post key={post.id} id={post.id} post={post.post} user_image={post.user_image} username={post.username} likes={post.likesCount} likedByUser={false} post_url={post.post_url} likeDislikePost={likeDislikePost} />)}
                </LinkrContentContainer>
                <HashtagBox />
            </LinkrContent>
        </>
    );
}