import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StyledContainer } from "./styled";
import CreatePost from "../../components/CreatePost/CreatePost";
import NavBar from "../../components/NavBar/NavBar";

import Post from "../../components/Post/Post";
import Context from "../../context/Context";

export default function TimelinePage() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  const { token, setToken } = useContext(Context);

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

  useEffect(() => {
    getAllUsersPosts();
  }, []);

  return (
    <>
      <NavBar />
      <StyledContainer>
        <h1>timeline</h1>
        <CreatePost />
        {posts && posts.length > 0 && posts.map(post => <Post key={post.id} id={post.id} post={post.post} user_image={post.user_image} username={post.username} post_url={post.post_url} id_user={post.id_user}></Post>)}
      </StyledContainer>

    </>
  );
}
