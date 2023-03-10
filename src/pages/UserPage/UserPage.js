import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";
import Context from "../../context/Context";
import { StyledContainer } from "./styled";

export default function UserPage() {
    const [userInfos, setUserInfos] = useState({});
    const [posts, setPosts] = useState([]);

    const { id } = useParams();
    
    const navigate = useNavigate();
    const { token, setToken } = useContext(Context);

    async function getUserInfosById() {
        try {
            const request = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserInfos(request.data);
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

    useEffect(() => {
        getUserInfosById().then(() => {
            getUserPosts();
        });
    }, []);

    if (!id || Number.isNaN(Number(id))) return (<Navigate to="/"></Navigate>);

    return (
        <>
            <NavBar />
            <StyledContainer>
                <h1>{userInfos.username}</h1>
                {posts && posts.length > 0 && posts.map(post => <Post key={post.id} id={post.id} post={post.post} user_image={userInfos.image} username={userInfos.username} post_url={post.post_url} id_user={id}></Post>)}
            </StyledContainer>
        </>
    );
}