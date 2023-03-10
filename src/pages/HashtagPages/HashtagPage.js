import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";
import { Container, LeftContent, Title } from "./styled";
import HashtagBox from "../../components/HashtagBox/HashtagBox";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Context from "../../context/Context";
export default function HashtagPage() {
  const { hashtag } = useParams();
  const [postsData, setPostsData] = useState([]);

  const navigate = useNavigate();

  const {token,setToken} = useContext(Context)

  async function listAllHashtagsPosts() {
    try {
      const request = await axios.get(
        `${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`,
        {
          headers: {
            Authorization: `Bearer ${token || localStorage.getItem("token")}`,
          },
        }
      );
      setPostsData(request.data);
    } catch (_) {
      setToken(null);
      localStorage.removeItem("token");
      navigate("/");
    }
  }

  useEffect(() => {
    listAllHashtagsPosts();
  }, [hashtag]);

  function likeDislikePost(id, likedByUser) {

    if (likedByUser === false) {
      const url = `${process.env.REACT_APP_API_URL}/post/${id}/like`
      const promise = axios.post(url)
      promise.then(() => listAllHashtagsPosts())
      promise.catch(err => { console.log(err) })

    } else {
      const url = `${process.env.REACT_APP_API_URL}/post/${id}/dislike`
      const promise = axios.post(url,)
      promise.then(() => listAllHashtagsPosts())
      promise.catch(err => { console.log(err) })
    }
  }

  return (
    <>
      <NavBar />
      <Container>
        <LeftContent>
          <Title data-test="hashtag-title"># {hashtag}</Title>
          {postsData && postsData.map(post => <Post data-test="post" key={post.id} id={post.id} post={post.post} user_image={post.user_image} username={post.username} likes={post.likesCount} likedByUser={false} post_url={post.post_url} likeDislikePost={likeDislikePost}/>)}
        </LeftContent>
        <HashtagBox />
      </Container>
    </>
  );
}
