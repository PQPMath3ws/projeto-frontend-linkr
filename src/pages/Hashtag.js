import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { HashtagBox } from "../components/Hashtags";
import { NavBar } from "../components/Navbar";
import { Post } from "../components/Post";

import { LinkrContent, LinkrContentContainer, TimelineText } from "../styles/Timeline";

export function HashtagPage({ loggedUserInfos, token, setToken }) {
    const [postsData, setPostsData] = useState([]);

    const navigate = useNavigate();

    const { hashtag } = useParams();

    const title = `Linkr | #${hashtag} Posts`;

    async function listAllHashtagsPosts() {
        try {
            const request = await axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setPostsData(request.data);
        } catch (_) {
            setToken(null);
            localStorage.removeItem("token");
            navigate("/");
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
                await listAllHashtagsPosts();
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
                await listAllHashtagsPosts();
            } catch (error) {
                console.log(error);
            }
        }
    }
    */

    useEffect(() => {
        document.title = title;
        listAllHashtagsPosts();
    }, []);

    return (
        <>
            <NavBar loggedUserInfos={loggedUserInfos} />
            <LinkrContent>
                <LinkrContentContainer>
                    <TimelineText># {hashtag}</TimelineText>
                    {postsData && postsData.length > 0 && postsData.map(post => <Post key={post.id} id={post.id} post={post.post} user_image={post.user_image} username={post.username} likes={post.likes} likedByUser={false} post_url={post.post_url} id_user={post.id_user} />)}
                </LinkrContentContainer>
                <HashtagBox />
            </LinkrContent>
        </>
    );
}